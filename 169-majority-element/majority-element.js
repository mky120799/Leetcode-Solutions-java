/**
 * @param {number[]} arr
 * @return {number}
 */
var majorityElement = function(arr) {
  let res = 0;
  let count = 1;

  // Step 1: Find candidate
  for (let i = 1; i < arr.length; i++) {
    if (arr[res] === arr[i]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      res = i;
      count = 1;
    }
  }

  // Step 2: Verify candidate
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[res]) {
      count++;
    }
  }

  if (count > Math.floor(arr.length / 2)) {
    return arr[res];
  }

  // if no majority element exists (problem guarantees one, but just in case)
  return -1;
};