import { describe, expect, it } from "vitest";
import { maxProfit } from "../src/lc121";

const prices = [7, 6, 4, 3, 1, 2, 6, 10];
const profit = 9;

describe("should", () => {
  it("exported", () => {
    expect(maxProfit(prices)).toEqual(profit);
  });
});
