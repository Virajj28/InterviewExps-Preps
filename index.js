// for (let i=0 ; i <=5 ; i++) {
//     console.log('Hello World!'+i)
// }


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

// function getLastCharacter(name){
//     return name[name.length-1]
// }

// console.log(getLastCharacter('viraj'))


// function skipFirstCharacter(text){
//     // return text.substring(1)
//     return text.slice(1)
// }
// console.log(skipFirstCharacter('Xcode'))
// console.log(skipFirstCharacter('Bello'))

// function getDescription (text){
//     return text.slice(0,10)
// }


// function concateInitials (firstNameIntial, lastNameInitial){
//     return firstNameIntial + ' ' + lastNameInitial
// }

// console.log(concateInitials('Viraj','Jadhav'))

// function getDescription (text) {
//         return text.slice(0,10) + '...'
// }

// console.log(getDescription('BellaCiaBellaCiao'))


// Template Strings
// STRING INTERPOLATION ✍️
// function sayHello (name){
//     return 'Hello' + ' ' + name; 
// }

// console.log(sayHello("Alex")); // "Hello Alex"
// console.log(sayHello("Sam")); // "Hello Sam"

// function getFullName (fname, lname) {
//     return `${fname} ${lname}`
// }

// console.log(getFullName('Viraj', 'Jadhav'))

// function getMultilineString(){
//     return  `I am learning JavaScript  
//     and I found it to be  
//     quite fun!`
// }

// console.log(getMultilineString());

// function capitalize(word) {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }

// // Sample usage - do not modify
// console.log(capitalize("sam")); // "Sam"
// console.log(capitalize("ALEX")); // "Alex"
// console.log(capitalize("chARLie")); // "Charlie"


// NUMBERS

// function convertNumberToString(num){
//     return num.toString();
// }
// console.log(convertNumberToString(42)); // "42"

// function getNextAge(age){
//     return Number.parseInt(age,10)+1;
// }    

// Number.parseInt

// function getDivisionRemainderBy2(number) {
//     return number%2;
//     }

//     console.log(getDivisionRemainderBy2(7))


// Variables
// let can be re assgined later on
// const cannot be re-assgined
// avoid using var


//  Conditions
// function evenOrOdd(number) {
//     if (number%2){
//         return ('odd')
//     } else return ('even')
//     }

//     console.log(evenOrOdd(7))



// Arrays 1
// function getNumberOfElements(ele){
//     return ele.length;
// }
// console.log(getNumberOfElements(['a', 'b'])); // 3


// function useCalculator(ele){
//  ele.push("Calci")
//  return ele
// }
// console.log(useCalculator(["Clock", "Twitter"])); // 

// function loopThroughElements(elements){
//     elements.forEach(function(element){
//         console.log(element);
//     })
// }
// loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console


// Arrays 2 & Callbacks

// function getYear(years,searchYear){
//     return years.find(function(year){
//         return year === searchYear
//     })
// }
// console.log(getYear([2019, 2020, 2021], 2020)); // 2020

// function getOddYears(years){
//     return years.filter(function(year){
//         return year %2 !==0;
//     })
// }
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]

// function isAppUsed(apps,app){
//     return apps.includes(app);
// }
// console.log(isAppUsed(["Twitter", "Calculator"], "Calclator")); // false

function getVotersCount(ages) {
    return ages.filter(
        function(age){
            return age<=18
        }
    ).length;
 }

 console.log(getVotersCount([18, 20, 16, 21, 17, 19, 65, 63, 64, 61, 17])); // 4
