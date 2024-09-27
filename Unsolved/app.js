
// Reverse in Place w/Palindrome Detector


// Instructions
// ============

// A palindrome is a sentence that reads the same backwards and forwards:
// "Was it a car or a cat I saw?"

// Reverse each word in a sentence

// and display it on the screen in the same order.

// For example, the sentence "This is an example"

// would become `siht si na elpmaxe.`



//          012345
// var sent = "we ran"


var sent = "Otto needs Xanax."
// var sent1 = "Otto bought a racecar he cannot afford."
// var sent2 = "Otto lost the deed to his house."

// i:6-1=   5,4,3,2,1,0,-1
// i >= 0?  t,t,t,t,t,t,f
// sent[i]; n,a,r,_,e,w
for (var i = sent.length-1; i >= 0; i--) {
    document.getElementById("demo").innerHTML = sent[i];
}

// $("#first-number").text(firstNumber);  

// const str = "Hello";
// let reversedStr = '';
// for (let i = str.length - 1; i >= 0; i++) {
//     reversedStr += str[i];
// }
// console.log(reversedStr); // Output: "olleH"



// If the word is a palindrome, have it display in red.

// Notes:
// ======

// Remove periods.
// Add the result to the page in the div with the id "Result".
// Here are some test phrases to put in your JavaScript:
// "Otto bought a racecar he cannot afford."
// "Otto lost the deed to his house."
// "Otto needs Xanax."


// Bonus:
// ======

// Remove all "special characters" (commas, periods, etc).
// Do not use the reverse() method.




// Instructions
// A palindrome is a sentence that reads the same backwards and forwards: "Was it a car or a cat I saw?"

// Reverse each word in a sentence and display it on the screen in the same order. For example, the sentence This is an example would become siht si na elpmaxe. If the sentence is a palindrome, have it display in red.

// NOTE:

// Remove periods.

// Add the result to the page in the div with the id "Result".

// BONUS:

// Remove all "special characters" (commas, periods, etc).

// Do not use the reverse() method.

// Here are some test phrases to put in your JavaScript:

// "Otto bought a racecar he cannot afford."

// "Otto lost the deed to his house."

// "Otto needs Xanax."



