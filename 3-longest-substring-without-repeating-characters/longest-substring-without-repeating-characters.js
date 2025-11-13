/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
       let left=0,right=0;
       let maxLength=0;
       bestStart=0;
       let set = new Set();

       for(right=0;right<s.length;right++){
             while(set.has(s[right])){
                set.delete(s[left]);
                left++;
             }
             set.add(s[right]);
             

            bestStart=left;
            maxLength = Math.max((right - left)+1,maxLength);

            
       }

    return maxLength;
        
    

};