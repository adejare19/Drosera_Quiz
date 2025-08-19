import { ethers } from "ethers";

// Load environment variables
const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

// Token ABI (only transfer)
const abi = [
  "function transfer(address to, uint256 amount) public returns (bool)"
];

// Handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { wallet, score } = req.body;

    if (!wallet || !score) {
      return res.status(400).json({ error: "Wallet and score are required" });
    }

    // Token reward logic
    let amount = 0;
    if (score === 15) amount = 15;
    else if (score >= 10) amount = 10;
    else if (score >= 5) amount = 5;
    else amount = 3;

    console.log(`Processing claim for ${wallet}, score: ${score}, reward: ${amount}`);

    // Setup provider + wallet
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);

    // Token contract
    const token = new ethers.Contract(TOKEN_ADDRESS, abi, signer);

    // Convert to correct decimals (18 assumed)
    const parsedAmount = ethers.parseUnits(amount.toString(), 18);

    // Send transaction
    const tx = await token.transfer(wallet, parsedAmount);
    console.log("Tx sent:", tx.hash);

    await tx.wait();
    console.log("Tx confirmed:", tx.hash);

    return res.status(200).json({
      success: true,
      txHash: tx.hash,
      amount,
      wallet
    });

  } catch (error) {
    console.error("Claim error:", error);
    return res.status(500).json({ error: error.message });
  }
}
