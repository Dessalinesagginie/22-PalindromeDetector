var sentence = "Otto needs Xanax" // "mom mom"

var sentenceArray = sentence.split(" ")

function reverseWord(word) {
    var wordRev = ""
    for (var i = word.length - 1; i >= 0; i--) {
        wordRev = wordRev + word[i]
    }
    return wordRev
}
 
function revSentence(sentence) {
    var newSentence = removePeriod(sentence)
    var words = newSentence.split(" ")
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

var sentenceRev = revSentence(sentence)





if (isPalindrome(sentence.toLowerCase(), sentenceRev.toLowerCase())) {

    displayInRed(sentenceRev)
}

function isPalindrome(sentence, sentenceRev) {
    for (let i = 0; i < sentence.length; i++) {
        
        if (sentence[i] !== sentenceRev[i]){

            return false 
        }

    }
    return true

}


function displayInRed(sentenceRev) {
    
    document.getElementById("output").innerHTML = `<span style="color: black;">${sentence}</span><br>` + 
        `<span style="color: red;">${sentenceRev}</span>`;
}


// Reverse each word in a sentence and display it on the screen in the same order. 
// For example, the sentence `This is an example` would become `siht si na elpmaxe`. 
// If the word is a palindrome, have it display in red. Do not use reverse() method.