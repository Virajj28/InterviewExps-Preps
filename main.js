--2022
  // # SlashRTC
  //Asked function callback, cons of it, React Lifecycle methods =>
  // function calc (num1,num2,callbackFunction){
  //     callbackFunction(num1,num2);
  // }

  // function calcSum(num1,num2){
  //     calcSum(num1*num2);
  // }

  // console.log(calc(2,2,calcSum))

  // useEffect ( () => {
  //     fetch('https://')
  //     .then(res => res.json)
  //     .then(data => {
  //         console.log(data);
  //     })
  // }, [])

  // # Digimaze => Animations in JS, Keyframes 

  // # LLP => 
  // Psychometric Test: https://openpsychometrics.org/tests/16PF.php

  // Test JS Dev: 

  // Name: Viraj Jadhav
  // Date: 18-02-2022
  // Soure (from where have you applied): 

  // 1) What's wrong with the code snippet?
  // new Promise((resolve, reject) => {
  // 	throw new Error('error')
  // }).then(console.log)

  // Data which has to be displayed is not mentioned in console log.

  // 2) What's the output of the following code snippet?
  // Promise.resolve(1)
  // .then((x) => x + 1)
  // .then((x) => { throw new Error('My Error') })
  // .catch(() => 1)
  // .then((x) => x + 1)
  // .then((x) => console.log(x))
  // .catch(console.error)

  // O/P: 

  // 3) What is the output of the following:
  // (function() { var a = b = 5; })();
  // console.log(b);
  // O/P: 5

  // 4) For a Mongo DB Collection “population” with following data write a mongo query to calculate population of each state.
  // { "_id" : ObjectId("5b432ae39a159b45b2f16947"), "city" : "Dallas""state" : "Texas""population" : 1197816.0"sensus" : "2010"}
  // { "_id" : ObjectId("5b432afe9a159b45b2f16948")"city" : "Houston""state" : "Texas""population" : 2100263.0"sensus" : "2010"}
  // { "_id" : ObjectId("5b432b249a159b45b2f16949")"city" : "San Jose""state" : "California""population" : 945942.0"sensus" : "2010"}
  // { "_id" : ObjectId("5b432b3d9a159b45b2f1694a")"city" : "San Francisco""state" : "California""population" : 805235.0"sensus" : "2010"}
  // { "_id" : ObjectId("5b432b6a9a159b45b2f1694b")"city" : "Jacksonville""state" : "Florida""population" : 821784.0"sensus" : "2010"}
  // { "_id" : ObjectId("5b432b879a159b45b2f1694c")"city" : "Baltimore""state" : "Maryland""population" : 620961.0"sensus" : "2010"}
  // { "_id" : ObjectId("5b432bc69a159b45b2f1694d")"city" : "Henderson""state" : "Nevada""population" : 257729.0"sensus" : "2010"}

  // 5) What is output of following code snippet
  // var x='initial'
  // console.log(x)
  // if(1==1){
  // 	var x='first'
  // 	console.log(x)
  // }
  // console.log(x)

  // O/P: first

  // 6) What is the importance of logs? How can log writing be made error free?  
  // => Importance of logs can be justified as what output we are receiving. Let’s say an example we are fetching data from an API to check whether we are receiving valid data from API.  

  // 7) What are good code indentation practices? tabs or spaces? 
  // => Good code indentation practices are tabs which helps in team for better code review practices.

  // 8) What are good brackets placement practices? 
  // => So, it states where our opening brackets end to same closing brackets. As, if VSCode developer can easily follow better code practices.

  // 9) How do you create a navbar that automatically highlights the link element in the navbar based on when the relevant section is scrolled to on the page body? 
  // => We can assign pseudo selector active for specific element in the navbar. With declaring different styles to that linked element. Also, on the page body to access specific section we can use scrollto in element tag to make our user-experience better.

  // 10) What is a pseudo selector? 
  // => Pseudo selectors performs their actions in CSS when certain event is occurred. Pseudo selectors are defined with colon. Listing some of them hover, active, before, after, nth child.

  // 11) What will be the output of this: transform: rotate(45deg), translate(100px); 

  // 12) What are keyframes? 
  // => Keyframes are used for creating animations in our web page through CSS. It helps in styling components to transform at a certain value.

  // 13) How to make the animation repeat forever?

  // 14) Difference between container and container fluid? 
  // => Container is defined for our element to act in contained form without disturbing other stylings.

  // 15) Explain briefly display flex vs display grid and their various properties
  // => Displaying flex makes our element to align in a manner which we define. It’s  various properties states as align-content,justify-content. Display grid helps us to create our elements in column-wise distribution. It’s properties are grid-align in columns, rows.

  // 16) Explain vh, px, em, etc  
  // => vh is view height. px is pixels which we use regular times. em is used to write styling values in industry standards and is the best practice.

  // 17) What is the box-sizing property? 
  // => It is defined with a box-sizing model of our web-page which follows up with content,padding,border,margin. Before start of styling, we provide values as 0

  // 18) Is a front end developer responsible for design choices? 
  // => Most of the times it depends for minor fixes as components which are designed in UX developer won’t have best practices on Front-end developer. As a change, design choices can be tackled by Frontend developer in necessary conditions.

  // 19) What are the best present day design or ux concepts? Which is the best in your opinion?	
  // => In my opinion to design a card glassmorphism design can be preferred. Also for making enterprise level web-apps standard ux concepts should be implemented such as dashboards with navbar (profile image of user on right and other links),right sidebar on the actual view page data according to project will be developed.

  // 20) What will be the output of this: 
  // 	function getStudentName() {
  // 	   return "Adam";
  // 	}

  // 	function displayStudentDetails(studentName) {
  // 	   console.log("This is " + studentName);
  // 	}

  // 	function enrollStudent(studentName) {
  // 	   console.log(studentName + " enrolled to your class");
  // 	}

  // 	function gradeTest(studentName) {
  // 	   console.log("Grading A for " + studentName);
  // 	}

  // 	function getStudentFriends() {
  // 	   var friends = ["Bob", "Charu", "Dick"];
  // 	   return friends;
  // 	}

  // 	function suggestMeAFriend() {
  // 	   var friends = getStudentFriends();
  // 	   studentName = friends[0];
  // 	   return studentName;
  // 	}

  // 	var studentName = getPhone();
  // 	displayStudentDetails(studentName);
  // 	enrollStudent(studentName);
  // 	var anyFriend = suggestMeAFriend();
  // 	gradeTest(studentName);

  // O/P: This is Adam.
  // 	         Adam enrolled to your class
  // 	         Grading A for Bob


  // #Apollo Finvest =>
  //// Callback Hell, Explain Class Components and Functional components, HOC
  // Questions 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
  // You may assume that each input would have exactly one solution, and you may not use the same element twice. 
  // Example 1:
  // Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  // Example 2:
  // Input: nums = [3,2,4],  target = 6
  // Output: [1,2]

  // Example 3:
  // Input: nums = [3,3], target = 6
  // Output: [0,1]

  // Pseudo Code:
  // cin<<nums
  // Loop 
  // First_elem+sec_elem = target


  // Question 2: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  // An input string is valid if:
  // Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.

  // Example 1:
  // Input: s = "()"
  // Output: true

  // Example 2:
  // Input: s = "()[]{}"
  // Output: true

  // Example 3:
  // Input: s = "(]"
  // Output: false

  // Pseudo Code:
  // String s input from user


  // # Visit Health => 
  // Div onClick and Btn onClick
  // useRef
  // Difference between Props and states
  // useEffect in depth , dependency arr
  // useContext
  // Code-splitting(React.lazy/LazyLoading =>)  bigger chunks while production build
  // Error Boundary
  // Infinite scrolling
  // Debouncing
  // JS question setTimeout , setInterval (you got confused)
  // clearInterval, clearTimeout (code didn't remember)
  // Virtual DOM
  // useState change in useEffect
  // useState in depth
  // localStorage and sessionStorage
  // HOC asked once again gave ryt
  // Lifecycle methods 
  // Error Boundaries
  ////// V.V.Imp => Memoization

  // => How workflow is managed
  // there are templates which take care of routes,redux flow has to take actions,services,helpers



  // #Blackcurrant labs =>
  // What do you understand by term CSS Flexbox ? List some attributes used in flexbox.
  // Do you know what is CSS Grid ?
  // Do you know what media queries are ? Give me specific value of media queries for mobile,tablet and desktop. 
  // Do you know any CSS selectors ? Give me some examples HOW DO YOU DEFINE EACH SELECTORS.
  // Do you know any more selectors other than psuedo ? 
  // Position VS Display  ..What values do you use any properties ?
  // display:none VS visibility:hidden
  // Difference between vh,vw, %
  // What do you understand by the term Viewport ?
  // Difference between inline, block, inline-block ?
  // Examples of pseudo elements and selectors ?
  // Difference between <link> <a> ?
  // Do you know anything about DOM ?
  // Layout tag, Void tag (Those tags which do not need to close), Formatting text tags
  // Merge two columns of first row ...Table-2 columns,3 rows- Merge 2 columns data in tr tag
  /////////JAVASCRIPT
  // How do you create an object data type in JS ? What values go in that data-type ?
  // Splice function in JS ?
  // Do you know how to access you html element from JS ?



  ///// Westside Angels => Overseas(Canada) opportunity
  // ReactJS... why use hooks ?
  // Writing JS in CSS.
  // ReactJS OR ReactTS ?
  // In js what we write more objects or classes ?
  // What do you think about code structure ?
  // ContextAPI hook ? Why to use in depth explanation ?
  // useEffect hook ? Tinkering about dependency array ? Eslint errors but anything fine to also use empty?
  // From scratch creating components ?
  // Pure Components
  // Any other coding languages know such as. Java,Python,C++ ?


  //// ELevar Sports => Full-Stack Developer, Lower Parel
  //Resume Projects => Perfect Portrait
  // Me as a 5 year old explain me REST API. Apart from REST API any alternative
  // said SOAP === gave reply something called as GraphQL.
  // Hackathons => 2048 Game
  // Nodejs advantage & disadvantages => What would you prefer backend if not NodeJS 
  // MongoDB pros & cons => MongoDB or Other DB
  // Express => Addition of two numbers live coding
  // Debugging errors tool => Postman,Thunderclient
  // There's an error in backend server how would you move on forward ?
  // Tell me something about this Github daily coding streak.
  // Why to join a startup ?
  // How does your weekend looks like ?

  -
  --2023
//// Fashion TV India => Full-Stack Developer, Santacruz
// On paper pesudo code:
// Find non-repeatable character 
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
// 1-15 traingular pattern
'https://www.tutorialstonight.com/number-pattern-programs-in-javascript'

// --Into Technical--
// Asynchronous and Synchronous in JS =>
'https://www.geeksforgeeks.org/synchronous-and-asynchronous-in-javascript/'
// Event Delegation in JS =>
'freecodecamp.org/news/event-delegation-javascript/'
// Can do Animations in Pure JS ?!


////// Republic World TV => Backend Developer, Lower Parel
// JS Questions: 
// what is First order function
// what is pure function
// Define let keyword
// then about var keyword
// Explain hoisting

// NodeJS Questions:
// Explain asynchronous nature of javascript

// On-Code Editor Solve this Question
//  let A=[1, 2, 3, 4, 5] is given as an array

// We need to rotate the array values based on the value provided
// If D=2 is given as an argument, the existing array has to be changed like.. 

// [3,4,5,1,2]

const rotateArray = (d) => {
  let x = [1, 2, 3, 4, 5]
  console.log(x.findIndex[d])
  return console.log(x.splice(d).concat(x));
};

rotateArray(2);

//////// Azent Overseas Education-MNC
// React Questions Only: since data-driven
// What is a prop ?
// Pass props from one component to another
// Got Stuck here: Render parent component from child component
// Concept: Prop drilling
// Difference between class-components and functional components
// Higher order components
// what is refs
//  What do you mean by component mounting


///// Shipyaari (big expectns)-Goregaon
// JS: Questions
const person = {
  name: "Himanshu",
  age: 25,
  amount: [100, 101, 102]
}

const personA = person;

person.amount[0] = 1000
console.log(personA)

Output: const person = {
  name: "Himanshu",
  age: 25,
  amount: [1000, 101, 102]
}

// DSA: 1 Question
const input = [9, 9, 9]

// const res = input.push();
// console.log(res)
Output: [1, 0, 0, 0]

// NodeJs: Stumbled for did it forgot stopping interval
const timer = [1, 2, 3, 4, 5]

for (let i = 0; i < timer.length; i++) {
  // console.log(timer[i])
  setInterval(() => console.log(timer[i]), 1000)
}

Output: 1
2
3
4
5

// ReactJS: Pretty good one thinking on it not that much but reality check 
// to get hands on dirty with code.
Link: https://codesandbox.io/s/shipyaari-navbar-p9v5vj


////// Zeidler Group
// 1st Machine Round:(45mins)
// 12 React,JS,DB,Logical Ques  -Complete
// 1 HardJS Ques -Left
// 2 Db Ques - 1stOne was Sum,Max,MIn and descending order & 2nd One Filter on letter of table value and ascending order

// 2nd Technical Round: (1hr)
// FE Dev:
// What is hooks and its uses
// Pass data into component => ContextAPI Provider
// How ReactJS files are appear in production/web browsers

// BE Dev:
// What is indexing in db?
// System design of Random Number shown to user
// ---Had to say missed an opportunity from referral


//// Neosoft Pvt Ltd
// Difference between let, var, const
// Let's say I had declared variable in const and defining same variable will it throw me error 
// Solve a question: Achieve without using inbuilt methods
const arr = [1, 2, 3, 4, 5, [6, 7]];
// arr.flatmap
let arrNums = []
for (let i = arr[0]; i < arr.length; i++) {
  arrNums.push(i)
}

console.log(arrNums)
// Refer this it's good resource https://flexiple.com/javascript/flatten-array-javascript
// Difference between spread operator & rest operator
// Explain me destructuring
// Difference between setTimeout & setInterval
// Explain me recursion
//  Can you use recursion in above given code:
// Exact reference for code: https://stackoverflow.com/questions/37105824/javascript-recursion-for-loop-for-flattening-array
// How can I achieve if optional paramter (?)
// What is interface in typescript
// How can you pass data in components ?
// ---Out of React so panel changed---



///// Gray Matrix 
// HTML & CSS Q's =>
// What are meta tags in html ?
// How can you navigate to some page using url in html ?
//  How can you link other web page into ur web page ? iframe tag
// Universal Selector in CSS ? 
// Difference between inline, block, inline-block elements ?
// How can you give linear gradient border in css ?
// React Q's =>
// What are Pure components in react ?
// What are controllable & non-controllable components ?
// What are props ?
//  What is prop drilling ?
// Round Coding =>
// CodeSandBox React use map function
//1.  Create a array of elements - Use map function and display in table 
const students = [{
  'id': 0,
  'name': 'Viraj'
}, {
  'id': 1,
  'name': 'Raj'
}]

return (
  <table>
    <><thead><th>Id</th><th>Name</th></thead><tbody>
      {
        // Counter question why mentioning key
        students.map((std, id) => (
          <td>{std.id}</td>
          ,
          <td>{std.name}</td>
        ))
      }
    </tbody></>
  </table >)

// 2. Create a counter which autoIncrements it's value
// const [counter, setCounter] = useState(0);

// const autoIncrement = () => {
//   setCounter(counter + 1)
// }

useEffect(() => {
  setInterval(autoIncrement, 1000)
}, [counter])

// -------------------April 2024----------------
////////////////////////////
// // // Fynd ==>> SDE1

const a = { id: 1 }
a.id = 5
// What will output id will be 5 or give error

const a = { v: 1, b: 3 }
a.v = 2
a.b = 4

// Write code for the following!
const initialObj = {
  a: [1, 2, 3],
  b: [2, 3, 5],
  c: [1, 5],
  d: [2, 3, 5]
}

function letss(p1, p2) {
  console.log(p1, p2, ...p2)
}
letss(1, 2, 3, 4)

OUTPUT -
{
  "1": ["a", "c"],
  "2": ['a', "b", "d"],
  "3": ["a", "b", "d"],
  "5": ["b", "c", "d"]
}

// const objVals = Object.entries(initialObj)
// console.log(objVals)

// for (let i = 0; i < objVals.length; i++) {
//   console.log(objVals[i])
//   let resultObj = {};
// }

const result = {};

// Iterate through initialObj
for (const key in initialObj) {
  // Iterate through array values of each key
  initialObj[key].forEach(value => {
    // If the value doesn't exist as a key in result, initialize it as an empty array
    if (!result[value]) {
      result[value] = [];
    }
    // Push the key into the array corresponding to the value
    result[value].push(key);
  });
}

console.log(result);

// ----------------
// ---Motilal Oswal---

// ----------------
// Quickwork

// ----------------
// ICICI Lombard

// --------------------
// NEOSOFT PVT-LTD //29th June

// --Db table name as students
// Viraj 60
// Raj 40

// Where => 

// SELECT students WHERE marks <= 50
// --O/p: Raj

// SELECT students HAVING marks = 80
// --o/p: false

// Mongp => Aggregation

// State Mgmt: Redux, Context Provider, UseState
// About NextJS

// Problem 1: 
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};

const obj2 = {
  b: {
    c: 4,
    e: 5
  },
  f: 6
};

// Merge obj1 and obj2 deeply
// Result: { a: 1, b: { c: 4, d: 3, e: 5 }, f: 6 }

// Tried solving
console.log(Object.keys(obj1))
// Soln:
function deepMerge(target, source) {
  // Iterate over all properties in the source object
  for (let key in source) {
    // Check if the property is an object
    if (source[key] && typeof source[key] === 'object') {
      // If the target property is also an object, merge recursively
      if (target[key] && typeof target[key] === 'object') {
        deepMerge(target[key], source[key]);
      } else {
        // Otherwise, copy the source property to the target
        target[key] = JSON.parse(JSON.stringify(source[key]));
      }
    } else {
      // If the property is not an object, copy it to the target
      target[key] = source[key];
    }
  }
}

const mergedObj = JSON.parse(JSON.stringify(obj1)); // Create a deep copy of obj1
deepMerge(mergedObj, obj2);
console.log(mergedObj);

// Problem 2:
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]


const head = [1, 2, 3, 3, 4, 4, 5]

let newArr = []
for (let i = 0; i < head.length; i++) {
  if (head[i] != head[i - 1]) {
    newArr.push(head[i])
  } else {
    newArr.pop(head[i])
  }
}
console.log(newArr)

// -----------CashInvoice---------

// Mantra Labs
//In depth CORS

// --------------------------
// Just Dial- 08/08
// Closures in JS
// Promises in JS
// Promise.all() & Promise.allSettled()
// Explain Try Catch
// React Lifecycle Methods
// Props in React
// Prop Drilling
// Context Provider
// Redux store question
// How can you access in component A from redux store
session: {username: 'Viraj'}


//employee data
//nodejs api => input username and password

routes:
app.route('/api/v1/user', userController.getUser)

controller:
getUser = (req, res) => {
  const body = req.body
  userService.validateUser(body)
}

service:
validateUser = (body) => {
  //const username = body.userName,
  //const userPassword = body.userPassword

  const { userName, password } = body;

  if (password) {
    const CheckUser = employeeData.find({
      username: username
      //password: password;
    })
    //CheckUser {username: 'Viraj'; password: ''}

    if (CheckUser) {
      return { success: true, message: 'User found' }
    }
    else if (checkuser.password !== password) {
      return { success: true, message: 'Password is incorrect' }
    }
    else {
      return { success: true, message: 'Password is not provided' }
    }
  }
}

// DB Basics &  Joins
// => SELECT MAX(Salary), MIN(Salary), AVG(Salary) FROM EmployeeSalary

// range 9000 150000
// id, name, salary

// SELECT EmpId, Salary FROM EmployeeSalary WHERE Salary RANGE(9000,15000) 

const givarr=[1,2,3,55,66,2,55,66,66,0]

let count = {}

givarr.map(num => {
  if(count[num]){
    count[num]++
  } else {
    count[num] = 1
  }
})

console.log(count)


// Famous Questions Object manipulators

function flattenArr (arr) {
  let res = []
  function recur(newArr){
      for(let i =0; i < newArr.length; i++){
      if(Array.isArray(newArr[i])){
        recur(newArr[i]) 
      } else {
          res.push(newArr[i])
      }
      }
  }
  recur(arr)
  return res
}

// function flattenArr(arr){
//     return arr.flat(3)
// }

console.log(flattenArr([1,2,[3,4,5,[6,7,[8,[9]]]]]))

function flattenObject(obj, parentKey = '', result = {}) {
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    // Check if the value is an object but not null and not an array
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((item, index) => {
        if (typeof item === 'object') {
          flattenObject(item, `${newKey}[${index}]`, result);
        } else {
          result[`${newKey}[${index}]`] = item;  // Directly add array values
        }
      });
    } else {
      result[newKey] = obj[key]; // Add non-object values directly
    }
  }
}
return result;
}

const obj = {
name: "John",
address: {
  city: "New York",
  zip: {
    code: 10001,
    plus4: 1234
  }
},
age: 30,
hobbies: ["Reading", "Traveling"],
family: [{ name: "Jane", relation: "Sister" }]
};

// {
//   "name": "John",
//   "address.city": "New York",
//   "address.zip.code": 10001,
//   "address.zip.plus4": 1234,
//   "age": 30
// }

console.log(flattenObject(obj))

// HDFC Life
// var x=10 //10 parent-scope
// function f(){
//     // console.log(x) //undefined
//     // var x=10
    
//     // var x=10
//     // console.log(x) //10
//     var x = 20
//     console.log(x)
// }
// f()

// const x = 10
// const y = x


const x = {a: 10, b: 20}
const y = x
y.c = 30

console.log(y)
console.log(x)

//////Factiwse
-Assignment round:
https://github.com/Virajj28/Factwise_Assesment

-Coding Round:
React, JS, React UI round
https://github.com/Virajj28/InterviewExps-Preps/blob/main/factwise-r1/FetchSearchProducts.jsx

-Problem Solving Round:
//Problem Stmt 1
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array `cardPoints`.
	In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
	Your score is the sum of the points of the cards you have taken.
	Given the integer array `cardPoints` and the integer k, return the maximum score you can obtain.
 
Examples:
Input: cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3  
      Output: 12

 // Approach:
// -store cardpoints length in n variable
// - max cardpoints sum
// - let i=n-1 , j=k-1
// - new variable newSum = max
// - while(j>=0) 
//   newSum = newSum - cardPoints[j--] + cardPoints[i--]
//   max = Math.max(newSum, max)
//  -return max
 function maxCardPts(cardPoints, k){
     let n = cardPoints.length;
    //  let max = cardPoints.reduce((acc,val) => acc+val,0)
    let max = 0
    for(let i=0; i<k;i++){
        max +=cardPoints[i]
    }

    //  console.log(max)
     let i = n-1; j=k-1
     let newSum = max
     
     while(j>=0){
         newSum = newSum - cardPoints[j--] + cardPoints[i--]
         max = Math.max(newSum, max)
     }
     return max
 }

  //Problm Stmt 2:  
You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.
Return the max of sliding window.
Input: 
"nums": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "k": 4  
  "result": [4, 5, 6, 7, 8, 9, 10]
 "nums": [1, 3, 1, 2, 0, 5], "k": 3  
   "result": [3, 3, 2, 5]
 -Approach:
 - new variable newArr storing arr
 - //i = nums-1, j=k-1 //
 
 while(j>=0){
        //  newEle = cardPoints[j--] + cardPoints[i--]
         max = Math.max() //Comparison of 3 nums in arr
     }
 - newArr.push(Math.max())


///////////////////Eccentric
ReactJS questions
Find longest substring question to solve
Code Examples asking output
Dbms Joins 
Prototypes of JS 

//////////////Synergy IT
NodeJS Event Loop
Explain Promises
Promises.all() VS Promises.allSettled()
Function Currying expln
functionName(1stParam){
	return function2Name(2ndParam){
		console.log(1stParam+2ndParam)
	}
}
functionName(1stparam)(2ndParam)
Object.create() VS Object.assign()
Prototype in JS
React Lifecycle Methods

////Problem Solving
const arr = [1,2,4,5,6]
// eg. target =5
// output: 3

// eg. target=7
// output: 5

// eg.target=3
// output:2

function findTargetIdx(ar, target) {
    let left = 0;
    let right = ar.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
    console.log('this is mid', mid)
        if (ar[mid] < target) {
            left = mid + 1; // Move to the right half
        } else {
            right = mid; // Move to the left half
        }
    }

    return left; // Left is the index where the target would be placed
}

console.log(findTargetIdx(arr,7))

--UseCallback
--UseDebounce (Working example scenario)

----2025

///// Sleeksky technologies
//Counter Comp
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [count, setCount] = useState(20.0);
  const [iinterval, setIInterval] = useState(true);

  useEffect(() => {
    console.log(iinterval);
    if (count > 0 && iinterval) {
      const intervalId = setInterval(
        () => setCount((count) => count - 0.01),
        10
      );
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [count, iinterval]);

  const handlePausePlay = () => {
    // console.log("hello");
    setIInterval((iinterval) => !iinterval);
  };

  return (
    <>
      <div>Countdown: {Number(count).toFixed(2)}</div>
      <Button handlePausePlay={handlePausePlay} />
    </>
  );
}

//Buttton
export default function Button({ handlePausePlay }) {
  return <button onClick={handlePausePlay}>Pause/Play</button>;
}

///////Faraday
---------------------------
//update ques

///////Digital Trons
-----------------------------------------------

//Questions:
//Difference between UseCallback and UseMemo
//Prop Drilling solution- in Depth with code explaination of Context Provider
// Virtual DOM
//Use Effect and React Cycle Methods--co-relation
// Event Loop in NodeJS

//Callback conversion to Promise Code
function getData(callback) {
    setTimeout(() => callback("Data received"), 1000);
}
//You solved
function getData (async() => {
    await new Promise((resolve,reject) => setTimeout(
        () => resolve("Data received"),1000)
        )
})
//Correct way when you return Promise
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}
// Usage
getData().then(data => console.log(data)); // Output: "Data received" after 1 second


//Fetch to Completed state change
import React from 'react'
import {useState, useEffect} from 'react'

// api = https://dummyjson.com/todos
const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((response) => response.json()) //Here I was calling data() well you should have JSON
      .then((data) => setTodos(data)) //Optimised better version was when u store in state as data.todos
      .catch((err) => console.error(err))
  }, [])

  console.log('Todos', todos.todos)

  const handleChange = (e) => {
    console.log('CHange Status CLicked')
    // console.log(e)
  }

///Handle Change should accept id
 const handleChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };	

  return (
    <>
      {/* Todos */}
      {todos?.todos?.length > 0 &&
        todos?.todos?.map((todo) => (
          <>
	   // <div key={todo.id}>
            <p key={todo.id}>
              {todo.id}: {todo.todo} - {todo.completed == true ? 'Yes' : 'No'}
            </p>
            <button onClick={handleChange}>Change Status</button>
	   // <button onClick={() => handleChange(todo.id)}>Change Status</button>
           // </div>
          </>
        ))}
    </>
  )
}

export default Todos

//March-Ref call
Projects in Nodejs
What is Event Loop
process.next.tick() , process.setImmediate()
//process.nextTick() runs code immediately after the current operation, before I/O tasks. 
// setImmediate() schedules code to run after the current event loop phase, following I/O tasks, impacting execution timing.
Callback
RESTFUL API
