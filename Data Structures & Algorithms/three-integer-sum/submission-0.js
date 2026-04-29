class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const numSort = nums.sort((a, b) => a - b), resp = []
        
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && numSort[i] === numSort[i - 1]){
                continue
            }
            let j = i + 1,k = numSort.length - 1;
            while(j < k){
                let sum = numSort[i] + numSort[j] + numSort[k]
                if(sum < 0){
                    j++
                }else if(sum > 0){
                    k--
                }else{
                    resp.push([numSort[i], numSort[j], numSort[k]])
                    while(j < k && numSort[j] === numSort[j + 1]){
                        j++
                    }
                    while(j < k && numSort[k] === numSort[k - 1]){
                        k--
                    }
                    
                    j++
                    k--
                }
            }
        }
        return resp
    }
}