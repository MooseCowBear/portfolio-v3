import { describe, it, expect } from "vitest";
import { filterProjects } from "../../src/utils/projects.ts";

describe("filterProjects", () => {
  it("returns projects with filter input string in stack", () => {
    const testProjects = [
      {
        name: "test1",
        bullets: [],
        stack: ["property1"],
        repo: "",
        wip: true,
        images: {
          light: [],
        },
      },
      {
        name: "test2",
        bullets: [],
        stack: ["property2"],
        repo: "",
        wip: true,
        images: {
          light: [],
        },
      },
    ];

    const res = filterProjects(testProjects, "property1");
    expect(res.length).toBe(1);
    expect(res[0].name).toBe("test1");
  });
});
