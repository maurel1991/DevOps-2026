import express from "express";

export const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "healthy", service: "capstone-api" });
});

app.get("/ready", (_req, res) => {
  res.json({ status: "ready" });
});

app.get("/api/products", (_req, res) => {
  res.json([
    { id: 1, name: "Cloud Lab", category: "training" },
    { id: 2, name: "DevOps Workshop", category: "training" },
    { id: 3, name: "Interview Lab", category: "career" }
  ]);
});

app.get("/api/info", (_req, res) => {
  res.json({
    service: "capstone-api",
    environment: process.env.APP_ENV ?? "local",
    version: process.env.APP_VERSION ?? "dev"
  });
});
