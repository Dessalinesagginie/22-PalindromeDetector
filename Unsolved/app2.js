var sentence = "This is an example"
var sentenceArray = sentence.split(" ") 

for (var i = 0; i < sentenceArray.length; i++) {    
}
console.log(sentence)

function reverseWord(word) { 

    for (var i = word.length-1; i >= 0; i--) { 
        console.log(word[i])
    }  
}

for (var i = 0; i < sentenceArray.length; i++) {    


reverseWord(sentenceArray[0]) 
reverseWord(sentenceArray[1]) 
reverseWord(sentenceArray[2])

}

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]

//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]

//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"

//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }

// reverseString("hello");


   

    

 