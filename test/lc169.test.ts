import { describe, expect, it } from "vitest";
import { majorityElement } from "../src/lc169";

const nums = [3, 3, 2, 2, 1, 1, 6, 5, 1];
const num = 1;

describe("should", () => {
  it("exported", () => {
    expect(majorityElement(nums)).toEqual(num);
  });
});
