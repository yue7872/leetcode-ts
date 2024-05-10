import { describe, expect, it } from "vitest";
import { rotate } from "../src/lc189";

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const nums1 = [5, 6, 7, 1, 2, 3, 4];

describe("should", () => {
  it("exported", () => {
    expect(rotate(nums, k)).toEqual(nums1);
  });
});
