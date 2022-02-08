// for (let i=0 ; i <=5 ; i++) {
//     console.log('Hello World!'+i)
// }

const { strictEqual } = require("assert")

// function sum (a, b){
//     return a*b;
// }

// console.log(sum(6,3))

// function getCharCount (str){
//     return str.length;
// }

// console.log(getCharCount('Hello World'))

// function toUpperCase (str){
//     return str.toUpperCase();
// }

// console.log(toUpperCase('viraj jadhav'))

// function getFirstCharacter(name){
//     return name[0]
// }

// console.log(getFirstCharacter('viraj'))

function getLastCharacter(name){
    return name[name.length-1]
}

console.log(getLastCharacter('viraj'))
