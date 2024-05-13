// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

// 示例 1：

// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
//      总利润为 4 + 3 = 7 。
// 示例 2：

// 输入：prices = [1,2,3,4,5]
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      总利润为 4 。
// 示例 3：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。

// // 单次遍历，每天都执行操作：先买进，如果第二天跌了，就卖出，记录卖出的利润。如果没跌，接着持有，因为可以提前知道后一天的，所以都在赚。
// // 该方法相当于把所有增长的都买了，计算最终收益

// export const maxProfit = (prices: number[]): number => {
//   if (prices.length === 1) {
//     return 0;
//   }
//   let buyPrice = prices[0];
//   let nextPrice = prices[1];
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (i === prices.length - 1) {
//       profit += prices[i] - buyPrice;
//     }
//     nextPrice = prices[i + 1];
//     if (prices[i] > nextPrice) {
//       profit += prices[i] - buyPrice;
//       buyPrice = nextPrice;
//     }
//   }
//   return profit;
// };

// 动态规划
// i为天数，j为持有状态，0-现金，1-股票。 所有状态：dp[i][j]。 初始状态 dp[0][0]：无事发生 dp[0][0] = 0；或 dp[0][1] = -prices[0];
// 状态可以理解为持有的现金 初始是0 买股票减现金，卖股票加现金。
// 输出值： 最后一天默认持有现金，卖出才能有盈利； dp[prices.len - 1][0]

export const maxProfit = (prices: number[]): number => {
  const len = prices.length;
  if (len === 1) {
    return 0;
  }
  const dp: number[][] = Array.from({ length: len }, _ => Array.from({ length: 2 }));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
    // 当天持现金有两种情况：1.前一天卖出了，手上没股票。持有现金是 dp[i - 1][0]  2.前一天持股 今天卖出，持有现金是 dp[i - 1][1] + prices[i]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 当天持股票有两种情况：1.前一天持股，今天持股，没花钱，持有现金没变  2.前一天卖出，今天买入。持有现金是前一天减去今天买入的。
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
};
