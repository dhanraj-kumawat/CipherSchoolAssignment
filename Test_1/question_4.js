// Write a JavaScript function that takes a string as input and returns the reverse of that string.
// Input: A string, e.g., "OpenAI".
// Output: The reverse of the string, e.g., "IAnepo".

let reverseString = (str)=>{
    let reStr = "";
    console.log(reStr)
for(let i = 0; i<str.length ; i++){
    reStr+=str[i];
}
console.log(reStr)
return reStr;
}

console.log(reverseString("hello"))


