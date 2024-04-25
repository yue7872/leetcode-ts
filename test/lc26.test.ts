import { describe, expect, it } from "vitest";
import { removeDuplicates } from "../src/lc26";

const nums = [0, 1, 2];
const expected = 3;

describe("should", () => {
  it("exported", () => {
    expect(removeDuplicates(nums)).toEqual(expected);
  });
});
