import { describe, expect, it } from "vitest";
import { maxProfit } from "../src/lc309";

const prices = [2, 1];
const profit = 0;

describe("should", () => {
  it("exported", () => {
    expect(maxProfit(prices)).toEqual(profit);
  });
});
