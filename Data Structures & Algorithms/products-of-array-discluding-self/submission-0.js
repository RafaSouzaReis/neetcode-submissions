class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const resp = new Array(nums.length)
        let producSelf = 1
        
        for(let i = 0; i < nums.length; i++){
            resp[i] = producSelf
            producSelf *= nums[i] 
        }
        producSelf = 1
        for(let i = nums.length - 1; i >= 0 ; i--){
            resp[i] *= producSelf
            producSelf *= nums[i] 
        }
        return resp
    }
}