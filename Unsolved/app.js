
var str = "we ran" //string
var strSplit = str.split(" ") //splits string items: we[0]; ran[1]
var words = [] //creates empty array called Words

words.push(strSplit[0]) //pushes we[0] into Words array 
words.push(strSplit[1]) //pushes ran[1] into Words array

// console.log items popped into words[] 
var word = words.pop()
var word = word.length

//Reverse words2

for (var i = word.length-1; i >= 0; i--) { 
    console.log(word[i])
}
// ran  r
// ran  a
// ran  n

var sent = "Otto needs Xanax."

for (var i = sent.length-1; i >= 0; i--) { 
    console.log(sent[i])
}













// var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"]
// var my4Names = myNames.join(" ") // "Nicholas Andrew Maxwell Morgan"
// console.log(my4Names); // "Nicholas Andrew Maxwell Morgan"

// var str2 ="ran we"
// var str2Split = str2.split(" ")
// var words2 = []

// words2.push(str2Split[0]) //pushes we[0] into Words array 
// words2.push(str2Split[1])

// for (var i = 0; i < words2.length; i++) { 
//     console.log(words2[i])
// }
// console.log(words2)