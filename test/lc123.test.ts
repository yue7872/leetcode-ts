import { describe, expect, it } from "vitest";
import { maxProfit } from "../src/lc123";

const prices = [3, 3, 5, 0, 0, 3, 1, 4];
const profit = 6;

describe("should", () => {
  it("exported", () => {
    expect(maxProfit(prices)).toEqual(profit);
  });
});
