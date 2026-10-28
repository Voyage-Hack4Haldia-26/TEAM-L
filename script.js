try { require("dotenv").config(); } catch (e) {}
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/health", (req, res) =>
  res.json({ status: "ok", project: "Team L: Image Classifier", stack: "node" })
);

app.post("/api/classify", (req, res) => {
  // TODO: Image -> {predictions[]}
  res.status(501).json({ error: "Not implemented", todo: "Image -> {predictions[]}" });
});

app.get("/api/history", (req, res) => {
  // TODO: Past predictions
  res.status(501).json({ error: "Not implemented", todo: "Past predictions" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Team L server running on http://localhost:${PORT}`));
