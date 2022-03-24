function palindrome(str) {
  let cleanedUp = str.replace(/\W+|_/g, '').toLowerCase();
  let reversed = cleanedUp.split('').reverse().join('');

  if (cleanedUp == reversed) {
    return true
  }
  return false
}

let palindromeTest = palindrome("not a palindrome");
console.log(palindromeTest);
