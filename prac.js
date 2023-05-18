// Best way we can grab the last index of an array?

// var arr = [5,10,12,90,3,7]
// console.log(arr[arr.length-1])

// function findChar(arr, targetLetter){
//     var is_found = false
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] == targetLetter){
//             is_found = true
//         }
//     }
//     return is_found
// }

// console.log(findChar(["r","a","c","e","c","a","r"], "c"))
// console.log(findChar(["r","a","c","e","c","a","r"], "f"))

// for(var i = 0; fibArr.length < n; i++)


// function fibonacciArray(n) {
//     //the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     // your code here
//     var sum = 0
//     for(var i = 0; fibArr.length < n; i++){
//         sum = fibArr[fibArr.length-2] + fibArr[fibArr.length-1]
//         fibArr.push(sum)
//     }
//     return fibArr;
// }
   
// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1]; // [0,1,1,]
//     // your code here
//     var sum = 0
//     while(fibArr.length < n){
//         sum = fibArr[fibArr.length-2] + fibArr[fibArr.length-1]
//         fibArr.push(sum)
//     }

//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i]
        average=sum/arr.length;
        if (arr[i]>average) {
            console.log ("here")
            count=count+1
        }
    }
    console.log ("here2")
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

async function pokeApi(){
    var res = await fetch(`https://pokeapi.co/api/v2/pokemon/3`)
    var data = await res.json()
    let name = data.forms[0].name
    let img = data.sprites.front_default
    console.log(name)
    console.log(img)
}

async function pokeapi(){
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/39`)
    var data = await response.json()
    console.log(data)
    document.querySelector("#poke-name").innerHTML = data.forms[0].name
    document.querySelector("#poke-img").src = data.sprites.front_shiny
}