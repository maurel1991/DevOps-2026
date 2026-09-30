import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("capstone api", () => {
  it("returns health", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

  it("returns products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
