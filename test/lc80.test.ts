import { describe, expect, it } from "vitest";
import { removeDuplicates } from "../src/lc80";

const nums1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const nums2 = [0, 0, 1, 1, 2, 3, 3];

describe("should", () => {
  it("exported", () => {
    expect(nums1.slice(0, removeDuplicates(nums1))).toEqual(nums2);
  });
});
