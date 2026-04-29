class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let  i = 0, j = heights.length - 1, max = 0;
        while(i < j){
            let sum = (j - i) * Math.min(heights[i],heights[j]);
            
            if(sum > max){
                max = sum
            }
            if(heights[i] < heights[j]){
                i++
            }else{
                j--
            }
        }
        return max
    }
}