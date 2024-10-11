
var sent = "This is an example"
// var sent = "We ran"
var sentSplit = sent.split(" ") 
var words = []

// words.push(sentSplit[1]) //: is
// words.push(sentSplit[2]) //: an
// words.push(sentSplit[3]) //: example

for (var i = 0; i < sentSplit.length; i++) { 
        console.log(words) 
    }
    
    // for (var i = sentSplit.length-1; i >= 0; i--) { 
    //     words.push(sentSplit[i]) //: This
    // }
    console.log(words)
// words.push(sentSplit[0]) //pushes we[0] into Words array 
// words.push(sentSplit[1]) //pushes ran[1] into Words array 
// for (var i = words.length-1; i >= 0; i--) { 
//     console.log(words[i])    
// }