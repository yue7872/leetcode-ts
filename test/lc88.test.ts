import { describe, expect, it } from "vitest";
import { merge } from "../src/lc88";

const nums1 = [4, 0, 0, 0, 0, 0];
const m = 1;
const nums2 = [1, 2, 3, 5, 6];
const n = 5;
const expected = [1, 2, 3, 4, 5, 6];

describe("should", () => {
  it("exported", () => {
    expect(merge(nums1, m, nums2, n)).toEqual(expected);
  });
});
