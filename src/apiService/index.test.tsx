import { apiService } from "./";
import { describe, it, expect } from "vitest";

describe("apiService", () => {
  it("should have the correct default configuration", () => {
    expect(apiService.defaults.baseURL).toBe(import.meta.env.VITE_BASE_URL);
    expect(apiService.defaults.headers.accept).toBe("application/json");
    expect(apiService.defaults.timeout).toBe(1000);
  });
});


