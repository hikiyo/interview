 /*
 * Given a string, reverse each word in a the sentence
 * */

 let reverse = "Mary would you mary me";
console.log(reverse.split('').reverse().join(""));
 /*
 * Given two strings, return true if they are anagrams of one another
 * */

 let wordOne = "Pascal Obispo";
 let wordTwo =  "Pablo Picasso";


function haveSameLetters(word1, word2) {
  return sorted(word1) == sorted(word2);
}

function sorted(str) {
  return str.split('').sort().join('');
}

function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  return word1 !== word2 && haveSameLetters(word1, word2);
}

 console.log(areAnagrams(wordOne, wordTwo));
 // => returns true !


 /*
 * Check if a given string is a palindrome "Rotor" is a palindrome. "Race Car" should also be considered a palindrome.
 * Case sensitivity should be taken into account
 * */

 let palindrome = "Eh ! ça va la vache";