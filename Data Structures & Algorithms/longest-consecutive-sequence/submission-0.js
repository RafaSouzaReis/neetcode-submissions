class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let maxCount = 0
        
        for (const num of numSet) {
            if (numSet.has(num - 1)) continue;

            let count = 1;

            while (numSet.has(num + count)) {
                count++;
            }

            maxCount = Math.max(maxCount, count);
        }
        return maxCount
    }
}