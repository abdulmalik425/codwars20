/*
Write a function that checks if a 
given string (case insensitive) is a palindrome.

P string
R true
E MOM -> MOM TRUE
P split concat reverse
*/

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
  }