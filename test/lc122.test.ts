import { describe, expect, it } from "vitest";
import { maxProfit } from "../src/lc122";

const prices = [1, 2, 3, 4, 5];
const profit = 4;

describe("should", () => {
  it("exported", () => {
    expect(maxProfit(prices)).toEqual(profit);
  });
});
