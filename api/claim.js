import { ethers } from "ethers";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { address, amount } = req.body;

    if (!address || !amount) {
      return res.status(400).json({ error: "Address and amount are required" });
    }

    // Load environment variables from Vercel settings
    const privateKey = process.env.PRIVATE_KEY;
    const rpcUrl = process.env.RPC_URL;
    const tokenAddress = process.env.TOKEN_ADDRESS;

    if (!privateKey || !rpcUrl || !tokenAddress) {
      return res.status(500).json({ error: "Server misconfigured. Missing env variables." });
    }

    // Provider and signer
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    // Token contract
    const abi = [
      "function transfer(address to, uint256 amount) public returns (bool)"
    ];
    const token = new ethers.Contract(tokenAddress, abi, wallet);

    // Execute transfer
    const tx = await token.transfer(address, ethers.parseUnits(amount.toString(), 18));
    await tx.wait();

    return res.status(200).json({ success: true, txHash: tx.hash });

  } catch (error) {
    console.error("Error in claim API:", error);
    return res.status(500).json({ error: error.message });
  }
}
