var sentence = "This is an example."
var sentenceArray = sentence.split(" ")

function reverseWord(word) {
    var wordRev = ""
    for (var i = word.length - 1; i >= 0; i--) {
        wordRev = wordRev + word[i]
    }
    return wordRev
}

function revWordsSent(sentence) {
    var cleanedSentence = removePeriod(sentence)
    var words = cleanedSentence.split(" ")
    var revWords = []

    for (var i = 0; i < words.length; i++) {
        var wordRev = reverseWord(words[i])
        revWords.push(wordRev)
    }

    return revWords.join(" ")
}

function removePeriod(sentence) {
    var newSent = ""
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ".") {
            newSent = newSent + sentence[i]
        }
    }
    return newSent
}

var revString = revWordsSent(sentence)
console.log(sentence)
console.log(revString)



// for (var i = 0; i < sentenceArray.length; i++) {
    
//     var word = sentenceArray[i]
    
//     var wordRev = reverseWord(word)

//     removePeriod(sentence)
// }

// var revSent = reverseWord(sentence)
// console.log(sentence)
// console.log(revSent)


// function transformSentence(sentence) {
//     // Remove the period from the sentence
//     const cleanSentence = sentence.replace('.', '');

//     // Split the cleaned sentence into words
//     const words = cleanSentence.split(' ');

//     // Function to reverse a word without using reverse()
//     function reverseWord(word) {
//         let reversed = '';
//         for (let i = word.length - 1; i >= 0; i--) {
//             reversed += word[i];
//         }
//         return reversed;
//     }

//     // Reverse each word and join them back into a sentence
//     const transformedWords = words.map(word => reverseWord(word));
//     return transformedWords.join(' ');
// }

// const originalSentence = "Otto needs Xanax.";
// const transformedSentence = transformSentence(originalSentence);
// console.log(transformedSentence); // Output: "nuR tsaf"

