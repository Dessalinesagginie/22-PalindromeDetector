
var str = "we ran" //string
var strSplit = str.split(" ") //splits string items: we[0]; ran[1]
var words = [] //creates empty array called Words

words.push(strSplit[0]) //pushes we[0] into Words array 
words.push(strSplit[1]) //pushes ran[1] into Words array

// console.log items popped into words[] 
var word = words.pop()
var word1 = words.pop()

//Reverse words2

for (var i = word.length-1; i >= 0; i--) { 
    console.log(word[i])
}
// ran  r
// ran  a
// ran  n

for (var i = word1.length-1; i >= 0; i--) { 
    console.log(word1[i])
}
//we w
//we e

var sent = "Otto needs Xanax."

for (var i = sent.length-1; i >= 0; i--) { 
    console.log(sent[i])
}