/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = new Map();
  let length = 0;
  let maxLength = 0;
  let cursor = 0;

  for (let i = 0; i < s.length; i++) {
      if (str.has(s[i])) {        
        i = str.get(s[i]);

        str = new Map();
        length = 0;
        // i = cursor;
      } else {
        length++;
        if (length > maxLength) maxLength = length;
        str.set(s[i], i);

      }
  }


  return maxLength;
};