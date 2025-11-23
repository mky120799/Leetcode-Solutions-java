/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

     // sorting

      arr.sort((a,b)=>{ if(a<b){return 1}})
      let map = new Map();
     //map

      for(let el of arr)
      if(!map.has(el)) {map.set(el,1)}
      else { map.set(el,map.get(el) + 1)}


     //check their frequencies
     let values = map.values();
     let set = new Set();
     for(let el of values)
     {
        if(!set.has(el)) 
           set.add(el) 
        else
          return false;
     }
     return true;

}
      
