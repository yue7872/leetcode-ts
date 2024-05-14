import { describe, expect, it } from "vitest";
import { maxProfit } from "../src/lc188";

const prices = [3, 2, 6, 5, 0, 3];
const k = 2;
const profit = 7;

describe("should", () => {
  it("exported", () => {
    expect(maxProfit(k, prices)).toEqual(profit);
  });
});
