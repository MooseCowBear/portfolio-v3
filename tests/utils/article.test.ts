import { describe, it, expect } from "vitest";
import { dateDisplay, displayContent } from "../../src/utils/articles.ts";

describe("dateDisplay", () => {
  it("returns a stringified date equal to local date representation", () => {
    const testDateString = "2024-02-12 14:04:01";
    expect(dateDisplay(testDateString)).toBe("2/12/2024");
  });
});

describe("displayContent", () => {
  it("returns the first paragraph of content with trailing ellipsis", () => {
    const testContentString = "<p>I am some kind of text.</p>";
    expect(displayContent(testContentString)).toBe("I am some kind of text....");
  });
});
