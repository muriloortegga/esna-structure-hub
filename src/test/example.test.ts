import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

describe("home page JSX integrity", () => {
  it("does not contain the duplicated CTA fragment that breaks production builds", () => {
    const source = readFileSync("src/pages/Index.tsx", "utf8");

    expect(source).not.toContain("</section>trar em contato");
    expect(source).not.toMatch(/<\/section>\s*trar em contato\s*<\/Link>/);
    expect(source.match(/<Layout>/g)).toHaveLength(1);
    expect(source.match(/<\/Layout>/g)).toHaveLength(1);
  });
});
