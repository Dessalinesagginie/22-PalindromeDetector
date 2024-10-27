
var sentence = "This is an example"
var sentenceArray = sentence.split(" ") 

function reverseWord(word) {
    
    //var word = "This"
    var letters = []  
    for (var i = word.length-1; i >= 0; i--) {    
        letters.push(word[i])
        
    }
    return letters
}    
for (var i = 0; i < sentenceArray.length; i++) {
    var word = sentenceArray[i]
    
    var wordrev = reverseWord(word)
    console.log(wordrev) 
    // how do I print "sihT" on one line
    // console.log(wordrev)
}   


 





 