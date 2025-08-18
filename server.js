const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS (frontend on Vercel + localhost for testing)
app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev
      "https://drosera-quiz-phi.vercel.app", // vercel frontend
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ API Routes
app.post("/api/submit", (req, res) => {
  const { score, wallet } = req.body;
  console.log("Received quiz submission:", score, wallet);

  // your token logic here
  res.json({ success: true, message: "Tokens will be sent shortly" });
});

// ✅ Serve frontend (React/Vercel build OR static index.html)
app.use(express.static(path.join(__dirname)));

// Catch-all: send index.html for frontend routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
