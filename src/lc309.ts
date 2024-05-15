// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格。

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:

// 输入: prices = [1,2,3,0,2]
// 输出: 3
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

// 示例 2:

// 输入: prices = [1]
// 输出: 0

export const maxProfit = (prices: number[]): number => {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }
  // 有冷静期 不单独设状态 往前推两天来进行状态转移
  // 买入 卖出
  const dp: number[][] = Array.from({ length: len }, () => new Array(2));
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    // 买入
    // 第二天想买入，第一天不能卖出，即无操作。因此受益为0，第二天买入的收益dp[1][1] = -price[1]
    if (i === 1) {
      dp[i][0] = Math.max(dp[0][0], -prices[1]);
    }
    else {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][1] - prices[i]);
    }

    // 卖出
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[len - 1][1];
};
