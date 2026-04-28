class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /^[a-zA-Z0-9]+$/;
        let left = 0, rigth = s.length - 1
        
        while(left < rigth){
            if(!regex.test(s[left])){
                left++;
                continue
            }
            if(!regex.test(s[rigth])){
                rigth--
                continue
            }
            if(s[left].toLowerCase() !== s[rigth].toLowerCase()){
                return false
            }
            left++
            rigth--
        }
        return true
        
    }
}