function maxProfit(prices) {
    let minPrice = prices[0], maxProfit=0;
    for (let price of prices) {
        minPrice = Math.min(price, minPrice);
        let profit = price - minPrice;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
}

console.log(maxProfit([3, 2, 6, 5, 0, 3]));