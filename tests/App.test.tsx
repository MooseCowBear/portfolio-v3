import { describe, it, expect } from "vitest";

describe("something truthy", () => {
  it("true is true", () => {
    expect(true).toBe(true);
  });

  it("false is false", () => {
    expect(false).toBe(false);
  });
});
