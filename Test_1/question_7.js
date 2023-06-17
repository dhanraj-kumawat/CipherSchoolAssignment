// Question 7:
// Write a JavaScript function that takes an array of strings as input and returns the concatenated string of all the elements.
// Input: An array of strings, e.g., ["Hello", " ", "world!"].
// Output: The concatenated string, e.g., "Hello world!".

function concat(str){
    let newStr= "" ;
    for(let i = 0; i<str.length; i++){
        newStr+= str[i];
    }
    return newStr;
    
}

console.log(concat(["Hello"," ","World"," !"]))