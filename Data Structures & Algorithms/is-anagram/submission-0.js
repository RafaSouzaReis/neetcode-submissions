class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const counter = {}
        for(const letter of s){
            if(letter in counter){
                counter[letter]++
            }else{
                counter[letter] = 1;
            }
        }
        for(const letter of t){
            
            if(letter in counter){
                counter[letter]--
                if(counter[letter] < 0) return false
            }else{
                return false
            }
        }
        return true
        
    }
}
