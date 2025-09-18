/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
      let set = new Set(sentence),i=97;
      while(i<=122){
       if(!set.has(String.fromCharCode(i)))
             return false;
       i++;
      }
      return true
};