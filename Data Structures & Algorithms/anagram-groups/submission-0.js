class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [], hash = {}
        for(const string of strs){
            let key = string.split("").sort().join("")
            if(!(key in hash)){
                hash[key] = []
            }
            hash[key].push(string)

        }
        return Object.values(hash)
        
        
    }
}

const solution = new Solution()
console.log(solution.groupAnagrams(["act","pots","tops","cat","stop","hat"]))
