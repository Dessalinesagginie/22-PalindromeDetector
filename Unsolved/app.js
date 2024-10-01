// Reverse in Place w/Palindrome Detector


// Instructions
// ============

// A palindrome is a sentence that reads the same backwards and forwards:
// "Was it a car or a cat I saw?"

// Reverse each word in a sentence

// and display it on the screen in the same order.

// For example, the sentence "This is an example"

// would become `siht si na elpmaxe.`

var str ="we ran" 
var strSplit = str.split(" ") 
var words = ["we "," ran "] 

words.push(strSplit[0]) 
words.push(strSplit[1]) 

console.log(words.pop()) 
console.log(words.pop())

for (var i = words.length-1; i >= 0; i--) { 
    // document.getElementById("demo").innerHTML = words[i];
    // console.log(words[0])
    // console.log(words[1])
    console.log(words[i])
}

for (var i = 0; i < words.length; i++) { 
    console.log(words[i])
}

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



