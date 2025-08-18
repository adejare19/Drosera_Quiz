import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { ethers } from "ethers";

dotenv.config();

// Log private key info
console.log("Private Key Loaded:", process.env.MASTER_PRIVATE_KEY ? "Yes" : "No");
console.log("Key length:", process.env.MASTER_PRIVATE_KEY.length);

const app = express();
const PORT = process.env.PORT || 4000;

// Allow CORS from your frontend
app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// Ethers setup
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.MASTER_PRIVATE_KEY, provider);
const tokenAbi = [
  "function transfer(address to, uint256 amount) public returns (bool)"
];
const tokenContract = new ethers.Contract(process.env.TOKEN_ADDRESS, tokenAbi, wallet);

// Claim endpoint (matches your frontend)
app.post("/api/claim", async (req, res) => {
  try {
    const { wallet: walletAddress, score } = req.body;

    if (!walletAddress || !ethers.isAddress(walletAddress)) {
      return res.status(400).json({ error: "Invalid wallet address." });
    }

    // Calculate tokens
    let tokens = 3;
    if (score === 15) tokens = 15;
    else if (score >= 10) tokens = 10;
    else if (score >= 5) tokens = 5;

    // Send tokens
    const tx = await tokenContract.transfer(walletAddress, ethers.parseUnits(tokens.toString(), 18));
    await tx.wait();

    return res.json({
      success: true,
      message: `Sent ${tokens} $Dexter tokens to ${walletAddress}`,
      txHash: tx.hash
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Transaction failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
