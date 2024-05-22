import { describe, expect, it } from "vitest";
import { canJump } from "../src/lc55";

const nums = [0, 1];
const expected = false;

describe("should", () => {
  it("exported", () => {
    expect(canJump(nums)).toEqual(expected);
  });
});
