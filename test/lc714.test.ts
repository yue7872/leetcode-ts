import { describe, expect, it } from "vitest";
import { maxProfit } from "../src/lc714";

const prices = [1, 3, 7, 5, 10, 3];
const fee = 3;
const profit = 6;

describe("should", () => {
  it("exported", () => {
    expect(maxProfit(prices, fee)).toEqual(profit);
  });
});
