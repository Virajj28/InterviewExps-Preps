// console.log('Hello JS !');

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

// Digimaze => Animations in JS, Keyframes 

// LLP => 
Psychometric Test: https://openpsychometrics.org/tests/16PF.php

Test JS Dev: 

Name: Viraj Jadhav
Date: 18-02-2022
Soure (from where have you applied): 

What's wrong with the code snippet?
new Promise((resolve, reject) => {
	throw new Error('error')
}).then(console.log)


Data which has to be displayed is not mentioned in console log.
What's the output of the following code snippet?
Promise.resolve(1)
.then((x) => x + 1)
.then((x) => { throw new Error('My Error') })
.catch(() => 1)
.then((x) => x + 1)
.then((x) => console.log(x))
.catch(console.error)

O/P: 

What is the output of the following:
(function() { var a = b = 5; })();
console.log(b);
O/P: 5
For a Mongo DB Collection “population” with following data write a mongo query to calculate population of each state.
{ "_id" : ObjectId("5b432ae39a159b45b2f16947"), "city" : "Dallas""state" : "Texas""population" : 1197816.0"sensus" : "2010"}
{ "_id" : ObjectId("5b432afe9a159b45b2f16948")"city" : "Houston""state" : "Texas""population" : 2100263.0"sensus" : "2010"}
{ "_id" : ObjectId("5b432b249a159b45b2f16949")"city" : "San Jose""state" : "California""population" : 945942.0"sensus" : "2010"}
{ "_id" : ObjectId("5b432b3d9a159b45b2f1694a")"city" : "San Francisco""state" : "California""population" : 805235.0"sensus" : "2010"}
{ "_id" : ObjectId("5b432b6a9a159b45b2f1694b")"city" : "Jacksonville""state" : "Florida""population" : 821784.0"sensus" : "2010"}
{ "_id" : ObjectId("5b432b879a159b45b2f1694c")"city" : "Baltimore""state" : "Maryland""population" : 620961.0"sensus" : "2010"}
{ "_id" : ObjectId("5b432bc69a159b45b2f1694d")"city" : "Henderson""state" : "Nevada""population" : 257729.0"sensus" : "2010"}
What is output of following code snippet
var x='initial'
console.log(x)
if(1==1){
	var x='first'
	console.log(x)
}
console.log(x)

O/P: first
What is the importance of logs? How can log writing be made error free?  Importance of logs can be justified as what output we are receiving. Let’s say an example we are fetching data from an API to check whether we are receiving valid data from API.  
What are good code indentation practices? tabs or spaces? Good code indentation practices are tabs which helps in team for better code review practices.
What are good brackets placement practices? So, it states where our opening brackets end to same closing brackets. As, if VSCode developer can easily follow better code practices.
How do you create a navbar that automatically highlights the link element in the navbar based on when the relevant section is scrolled to on the page body? We can assign pseudo selector active for specific element in the navbar. With declaring different styles to that linked element. Also, on the page body to access specific section we can use scrollto in element tag to make our user-experience better.
What is a pseudo selector? Pseudo selectors performs their actions in CSS when certain event is occurred. Pseudo selectors are defined with colon. Listing some of them hover, active, before, after, nth child.
What will be the output of this: transform: rotate(45deg), translate(100px); 
What are keyframes? Keyframes are used for creating animations in our web page through CSS. It helps in styling components to transform at a certain value.
How to make the animation repeat forever?
Difference between container and container fluid? Container is defined for our element to act in contained form without disturbing other stylings.
Explain briefly display flex vs display grid and their various properties Displaying flex makes our element to align in a manner which we define. It’s  various properties states as align-content,justify-content. Display grid helps us to create our elements in column-wise distribution. It’s properties are grid-align in columns, rows.
Explain vh, px, em, etc  vh is view height. px is pixels which we use regular times. em is used to write styling values in industry standards and is the best practice.
What is the box-sizing property? It is defined with a box-sizing model of our web-page which follows up with content,padding,border,margin. Before start of styling, we provide values as 0
Is a front end developer responsible for design choices? Most of the times it depends for minor fixes as components which are designed in UX developer won’t have best practices on Front-end developer. As a change, design choices can be tackled by Frontend developer in necessary conditions.
What are the best present day design or ux concepts? Which is the best in your opinion?	In my opinion to design a card glassmorphism design can be preferred. Also for making enterprise level web-apps standard ux concepts should be implemented such as dashboards with navbar (profile image of user on right and other links),right sidebar on the actual view page data according to project will be developed.
What will be the output of this: 
	function getStudentName() {
	   return "Adam";
	}
	 
	function displayStudentDetails(studentName) {
	   console.log("This is " + studentName);
	}
	 
	function enrollStudent(studentName) {
	   console.log(studentName + " enrolled to your class");
	}
	 
	function gradeTest(studentName) {
	   console.log("Grading A for " + studentName);
	}
	 
	function getStudentFriends() {
	   var friends = ["Bob", "Charu", "Dick"];
	   return friends;
	}
	 
	function suggestMeAFriend() {
	   var friends = getStudentFriends();
	   studentName = friends[0];
	   return studentName;
	}
	 
	var studentName = getPhone();
	displayStudentDetails(studentName);
	enrollStudent(studentName);
	var anyFriend = suggestMeAFriend();
	gradeTest(studentName);

O/P: This is Adam.
	         Adam enrolled to your class
	         Grading A for Bob
