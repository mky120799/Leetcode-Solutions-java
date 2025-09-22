/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(a, b) {
    let st = new Set(a);
    let ans = [];

    for (let num of b) {
        if (st.has(num)) {
            ans.push(num);
            st.delete(num); // avoid duplicates
        }
    }
    return ans;
};