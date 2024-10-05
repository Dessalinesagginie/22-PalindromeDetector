
var str ="we ran" 
var strSplit = str.split(" ") 
var words = [] 

words.push(strSplit[0]) 
words.push(strSplit[1]) 

console.log(words.pop()) 
console.log(words.pop())

words.push("n","a","r"," ")

words.push("e","w")

for (var i = 0; i < words.length; i++) { 
    console.log(words[i])
}

document.getElementById("demo").innerHTML=(words);


