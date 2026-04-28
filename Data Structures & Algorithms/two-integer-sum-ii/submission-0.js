class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0, rigth = numbers.length -1, sum = 0;
        while(left < rigth){
            sum = numbers[left] + numbers[rigth]
            if(sum > target){
                rigth--
            }else if(sum < target){
                left++
            }else{
                return [left + 1, rigth + 1]
            }
        }
        return []
    }
}