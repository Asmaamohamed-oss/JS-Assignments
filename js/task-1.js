// 1. Write a JavaScript function to print the “Hello World” message
// ========================================================================================
// 2. Write a JavaScript function Returns whether a given year is a leap year, 
// according to the rules of the Gregorian calendar. 
// A year is a leap year if it is (1) divisible by 4 but not 100, 
// or else (2) is divisible by 400.
// ========================================================================================
// 3. Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
// ========================================================================================

//1. Hello Message
let msg = "Hello World"
function printMsg(msg){
    document.writeln(msg)
}
printMsg(msg)

///2. Leap Year 
function isLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0){
        return "Yes , it's a leap year"
    }else if(year % 400 == 0){
        return " Yes , it's a leap year"
    }else{
        return "No , it's not a leap year"
    }
}
const yearPrompt = prompt("Enter a Year To Tested If It's a Leap Year Or Not!")
const isLeapYearReasult = isLeapYear(yearPrompt);
console.log(isLeapYearReasult);

///3. multiplyFive

function multiplyFive(num){
    if(num % 5 == 0){
        return `${num} can be divided by 5`;
    }else{
        return `${num} cannot be divided by 5`
    }

} 

const userNum = prompt("Enter A Number")
const  multiplyFiveResult =  multiplyFive(userNum)
console.log(multiplyFiveResult);