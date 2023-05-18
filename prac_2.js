


// Change Algo - build a function that takes a dollar amount and returns the same amount in change. Return how many quarters dimes nickels and pennies. 

function validateAge(){
    // code 
}
function changeAlgo(cents){
    var change = {
        "quarters" : 0,
        "dimes" : 0,
        "nickels" : 0,
        "pennies" : 0
    }
    var total = cents
    change["quarters"] = Math.floor(total/25)
    total -= Math.floor(total/25) * 25
    change["dimes"] = Math.floor(total/10)
    total -= Math.floor(total/10) * 10
    change["nickels"] = Math.floor(total/5)
    total -= Math.floor(total/5) * 5
    change["pennies"] = total
    total =0
    return change
}

console.log(changeAlgo(89))


// function changeAlgo(cents){
//     var quarters = 0
//     var dimes = 0
//     var nickels = 0
//     var pennies = 0
//     var total = cents
//     while(total > 0){
//         if(Math.floor(total/25)>=1){
//             quarters = Math.floor(total/25)
//             total -= Math.floor(total/25) * 25
//         }
//         if(Math.floor(total/10)>=1){
//             dimes = Math.floor(total/10)
//             total -= Math.floor(total/10) * 10
//         }
//         if(Math.floor(total/5)>=1){
//             nickels = Math.floor(total/5)
//             total -= Math.floor(total/5) * 5
//         }
//         if(Math.floor(total/1)>=1){
//             pennies = Math.floor(total/1)
//             total -= Math.floor(total/1) * 1
//         }
//     }
//     return `${quarters} ${dimes} ${nickels} ${pennies}`
// }

// console.log(changeAlgo(34))


// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is. ex greaterThan([1,3,5,7,9,13]) --> 4 and print values 5, 7, 9, 13

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same. ex lenVal(3, 7) --> [7,7,7]


// Bonus
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.