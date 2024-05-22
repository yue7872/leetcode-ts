import { describe, expect, it } from "vitest";
import { canJump } from "../src/lc55";

const nums = [2, 0, 0];
const expected = true;

describe("should", () => {
  it("exported", () => {
    expect(canJump(nums)).toEqual(expected);
  });
});
