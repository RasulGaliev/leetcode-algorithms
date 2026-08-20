/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let value = Math.round(x);
  let length = 0;

  while (value > 0) {
    value = Math.floor(value / 10);
    length++;
  }

  console.log('length', length);

  for (let i = 0; i < length / 2; i++) {
    let first = Math.floor(x / (10 ** (length - i * 2 - 1)));
    let last = x % 10;

    console.log('------------');
    console.log('first', first);
    console.log('last', last);
    console.log('value', value);

    if (first !== last) return false;

    x =  Math.floor(x % (10 ** (length - i * 2 - 1)) / 10);
  }

  return true;
};

console.log(isPalindrome(-121))