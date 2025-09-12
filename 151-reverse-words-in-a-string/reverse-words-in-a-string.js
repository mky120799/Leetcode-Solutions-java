/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // trim from both the ends
  let charArr = s.trim().split(""),
    flag = "space",
    tempString = "";

  // this loop removes the extra spaces between the words
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] ===" " && flag === "space") {
      tempString += charArr[i];
      flag = "char";
    } else if ( charArr[i].charCodeAt(0) >= 48 && charArr[i].charCodeAt(0) <= 122 ) {
      tempString += charArr[i];
      flag = "space";
    }
  }

  // return
  return tempString.split(" ").reverse().join(" ");
};