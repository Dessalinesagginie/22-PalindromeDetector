var sentence = 
// "Madam, in Eden, I’m Adam." 
"Otto bought a racecar he cannot afford."; 
var sentenceArray = sentence.split(" ");

function reverseWord(word) {
    var wordRev = "";
    for (var i = word.length - 1; i >= 0; i--) {
        wordRev = wordRev + word[i];
    }
    return wordRev;
}

function periodGone(sentence) {
    var newSent = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ".") {
            newSent = newSent + sentence[i]; 
        }
    }
    return newSent; 
}

function isPalindrome(word) {
    var lowerCaseWord = word.toLowerCase();
    var wordRev = reverseWord(lowerCaseWord);
    return lowerCaseWord === wordRev; 
}

function displayResults() {
    var result = ""; 
    var nonPeriodSentence = periodGone(sentence); 
    var words = nonPeriodSentence.split(" "); 
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var wordRev = reverseWord(word);

    // Create the display string
        result = result + `<span style="color: black;">${word}</span> <span style="color: grey;">→</span> `;

        if (isPalindrome(word)) {
            result = result + `<span style="color: red;">${wordRev}</span><br>`; // Palindrome in red
        } else {
        result = result + `<span style="color: black;">${wordRev}</span><br>`; // Non-palindrome in black
        }
    }

    document.getElementById("output").innerHTML = result; // Display the result
}

displayResults(); // Call the function to display results