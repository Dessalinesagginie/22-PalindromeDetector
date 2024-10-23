
var sentence = "This is an example"
var sentenceArray = sentence.split(" ") 

function reverseWord(word) {
    
    //var word = "This"
    for (var i = word.length-1; i >= 0; i--) { 
        console.log(word[i])
    }
    // "sihT"
    return word
}    

for (var i = 0; i < sentenceArray.length; i++) {
    var word = sentenceArray[i]
    
    var wordrev = reverseWord(word)
}

for (var i = word.length-1; i >= 0; i--) { 
    console.log(word[i])
}  


// how do I take the letters and get the string I want?

   

    

 