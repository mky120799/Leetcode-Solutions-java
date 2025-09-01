/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length;
    let prefix = strs[0];
    for(let i = 1 ; i < n;i++)
    {
       while(strs[i].indexOf(prefix)!==0)
       {
          // reduce the length of the prefix
          prefix = prefix.slice(0,prefix.length-1);
          if(prefix ==="") return "";
       }
    }
    return prefix;
};