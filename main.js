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