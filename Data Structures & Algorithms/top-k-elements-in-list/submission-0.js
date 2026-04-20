class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = {}, bucket2 = {}, resp = [], numFreq = []
        for(let element of nums){
            if(element in bucket){
                bucket[element] += 1
            }else {
                bucket[element] = 1
            }
        }
        
        for(let [num, freq] of Object.entries(bucket)){
            numFreq.push([+num, freq])
        }
        
        for(let element of numFreq){
           if(!(element[1] in bucket2)){
                bucket2[element[1]] = []
            }
            bucket2[element[1]].push(element[0])    
        }
        
        for(let i = nums.length; i > 0; i--){
            if(bucket2[i] !== undefined){
                for(let j = 0; j < bucket2[i].length; j++){
                    resp.push(bucket2[i][j])
                    if(resp.length === k){
                        return resp
                    }
                }
            }
        }
        
    }
}