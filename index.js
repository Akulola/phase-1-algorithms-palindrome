function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  length = word.length;
  for (let i = 0; i < length / 2; i++) {
    if (word[i]!== word[length - i - 1]) {
      return false;
    }
  }
  return true;
}

/* 
  PSEUDOCODE!
  1. convert the given word to lowercase
  2. Get the length of the word and assign it to the length variable.
  3.Check if the first half of the word is the same as the second half of the word when it's reversed:
    a. If the two halves are not the same, the word is not a palindrome, so return false
    b. If the two halves are the same, the word is a palindrome, so return true 
*/


/*
  Add written explanation of your solution here
  The code checks if the given word is a palindrome(a word that is the same when read forwards and backwards).
  It converts the word to lowercase and the counts how many character the word has. It is then halved and then the code loops through the first half to see if the characters
  match up to the other half. If it doesn't, it returns a false but if it does then it returns true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));

    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));

    console.log("Expecting: false");
    console.log("=>", isPalindrome("ab"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
