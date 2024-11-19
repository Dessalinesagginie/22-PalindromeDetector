
var sentence = "Otto needs Xanax"
var sentenceArray = sentence.split(" ")

function reverseWord(word) {
    var wordRev = ""
    for (var i = word.length - 1; i >= 0; i--) {
        wordRev += word[i]
    }
    return wordRev
}

function revSentence(sentence) {
    var newSentence = periodGone(sentence)
    var words = newSentence.split(" ")
    var revWords = []

    for (var i = 0; i < words.length; i++) {
        var wordRev = reverseWord(words[i])
        revWords.push(wordRev)
    }
    return revWords.join(" ")
}

function periodGone(sentence) {
    var newSent = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ".") {
            newSent = newSent + sentence[i]
        }
    }
    return newSent
}

function isPalindrome(word) {
    var lowerCaseWord = word.toLowerCase()
    var wordRev = reverseWord(lowerCaseWord)
    return lowerCaseWord === wordRev
}

function displayResults() {
    // var sentenceRev = revSentence(sentence)
    var result = "" 
    // result = Otto-->ottO (new line)  

    var words = sentence.split(" ")
    // words = [Otto, needs, Xanax]
    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        // word = Otto; needs
        var wordRev = reverseWord(word)
        // wordRev = ottO; sdeen

        result = result + 
            `<span style="color: black;">${word}</span> <span style="color: grey;">→</span> ` +                   
            `<span style="color: ${isPalindrome(word) ? 'red' : 'black'};">${wordRev}</span><br>`
        // result = "" + 
        //   <span style="color: black;">Otto</span> <span style="color: grey;">→</span> +
        //   <span style="color: red;">ottO</span><br>
        // result =  "" + "Otto -->" + "ottO"
        
        // result = Otto→ottO <br> needs→sdeen <br> Xanax→xanaX <br>
    }
    
    document.getElementById("output").innerHTML = result
    // Otto -->Otto
}

displayResults()

