class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0, j = height.length - 1, leftMax = 0, rigthMax = 0, water = 0
        
        while(i < j){
             leftMax = Math.max(leftMax, height[i]);
             rigthMax = Math.max(rigthMax, height[j]);
             
             if(leftMax < rigthMax){
                 water += leftMax - height[i]
                 i++
             }else{
                 water += rigthMax - height[j]
                 j--
             }
        }
        return water
    }
}