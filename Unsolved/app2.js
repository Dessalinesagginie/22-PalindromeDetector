// in : "This is an example"
// out: "sihT is na elpmaxe"  

var sentence = "This is an example"
var sentenceArray = sentence.split(" ") 

function reverseWord(word) {
    
    var wordRev = "" 

    for (var i = word.length-1; i >= 0; i--) { 
        wordRev = wordRev + word[i]
    }
    
    return wordRev
}

for (var i = 0; i < sentenceArray.length; i++) {
    
    var word = sentenceArray[i]
    
    var wordRev = reverseWord(word)
    
}
