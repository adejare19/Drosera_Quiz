
import { ethers } from "ethers";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { wallet, score } = req.body;

    if (!wallet || !score) {
      return res.status(400).json({ error: "Wallet address and score required" });
    }

    // Validate Ethereum address
    if (!ethers.isAddress(wallet)) {
      return res.status(400).json({ error: "Invalid wallet address" });
    }

    
    let reward = 3;
    if (score >= 15) reward = 15;
    else if (score >= 10) reward = 10;
    else if (score >= 5) reward = 5;

    
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

   
    const contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      ["function transfer(address to, uint amount) public returns (bool)"],
      signer
    );

   
    const tx = await contract.transfer(wallet, ethers.parseUnits(reward.toString(), 18));

    return res.status(200).json({
      message: `Sent ${reward} tokens`,
      txHash: tx.hash,
    });
  } catch (error) {
    console.error("Claim error:", error);
    return res.status(500).json({ error: "Transaction failed", details: error.message });
  }
}
