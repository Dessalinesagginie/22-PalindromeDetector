var sentence = "Otto needs Xanax"; // Input sentence
var sentenceArray = sentence.split(" "); // Split the sentence into words
var palinword = " "; // Initialize an empty string for output

// Loop through each word to reverse and check for palindromes
for (var i = 0; i < sentenceArray.length; i++) {
    var wordRev = reverseWord(sentenceArray[i]); // Reverse the individual word

    // Check if the original word is a palindrome
    if (isPalindrome(sentenceArray[i])) {
        palinword += `<span class="palindrome">${wordRev}</span> `; // Highlight in red if palindrome
    } else {
        palinword = palinword + sentenceArray[i] + " "; // Just add the reversed word
    }
}

// Display the result
document.getElementById("output").innerHTML = palinword//.trim(); // Update the output div

// Function to reverse a word without using reverse()
function reverseWord(word) {
    var wordRev = " ";
    for (var i = word.length - 1; i >= 0; i--) {
        wordRev = wordRev + word[i]; // Append each character in reverse order
    }
    return wordRev; // Return the reversed word
}

// Function to check if a word is a palindrome
function isPalindrome(wordRev) {
    var revWord = wordRev.toLowerCase(); // Normalize to lowercase
    // var wordRev = wordrev.toLowerCase();
    var wordRev = reverseWord(revWord); // Reverse the normalized word
    return revWord === wordRev; // Check if they are equal
}
   

    

    
