/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // lets finds out the sequence of unique values using set in js
  if (s.length !== t.length) return false;
  let firstStrArr = s.split("");
  let secondStrArr = t.split("");
  let firstStrSet = [...new Set(firstStrArr)];
  let secondStrSet = [...new Set(secondStrArr)];
  let map = new Map();
  for (let i = 0; i <= firstStrSet.length - 1; i++) {// why this loop is running for only one time
    map.set(firstStrSet[i], secondStrSet[i]);
  }
  let res = "";
  for (let i = 0; i <= s.length - 1; i++) {
    res += map.get(s[i]);
  }
  return res === t ? true : false;
};

// console.log(isIsomorphic("add", "egg"));
