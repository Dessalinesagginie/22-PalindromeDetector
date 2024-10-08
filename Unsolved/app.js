
var str = "we ran" //string
var strSplit = str.split(" ") //splits string items: we[0]; ran[1]
var words = [] //creates empty array called Words

words.push(strSplit[0]) //pushes we[0] into Words array 
words.push(strSplit[1]) //pushes ran[1] into Words array

// console.log items popped into words[] 
var words2 = words.pop()
var words3 = words.pop()

//Reverse words2

for (var i = words.length-1; i >= 0; i--) { 
    // document.getElementById("demo").innerHTML = words[i];
    // console.log(words[0])
    // console.log(words[1])
    console.log(words[i])
}
// ran  r
// ran  a
// ran  n
















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