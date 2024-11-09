var sentence =  "Otto lost the deed to his house." // * "Otto bought a racecar he cannot afford."// * "Otto needs Xanax."

var sentenceArray = sentence.split(" ")

function reverseWord(word) {
    var wordRev = ""
    for (var i = word.length - 1; i >= 0; i--) {
        wordRev = wordRev + word[i]
    }
    return wordRev
}

function revWordsSent(sentence) {
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

var revString = revWordsSent(sentence)

document.getElementById("output").innerHTML = `<span style="color: black;">${sentence}</span><br>` + 
    `<span style="color: red;">${revString}</span>`;

// * Remove periods.
// * Add the result to the page in the div with the id "Result".

// * Bonus:
// * Remove all "special characters" (commas, periods, etc).
// If the sentence is a palindrome, have it display in red. 




