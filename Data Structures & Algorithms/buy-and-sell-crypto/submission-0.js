class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0], resp = 0
        
        for(const price of prices){
            minPrice = Math.min(minPrice, price)
            let sum = price - minPrice
            resp = Math.max(resp, sum)
        }
        return resp
    }
}