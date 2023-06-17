// Write a JavaScript function that takes a number as input and checks if it is even or odd. Return "Even" if the number is even, and "Odd" if the number is odd.
// Input: A number, e.g., 7.
// Output: "Odd".

function isEvenOrOdd(num){
    if(num%2 == 0)
    return "Even";
    else
    return "odd";
}

console.log(isEvenOrOdd(0))