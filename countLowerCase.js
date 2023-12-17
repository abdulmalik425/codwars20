/*

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3


*/

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}