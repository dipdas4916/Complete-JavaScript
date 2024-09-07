"use strict"; // treat all JS code as newer version, but there is no feature to "no script". But nowadays by default all code follows newer version without writing "use strict"

//alert("Hi, I am alert function in JS");  //It is not browser, it is NodeJs, alert() function works on Browser's engine only to show pop ups notifications

// const a = prompt("Enter an Integer:"); //It is not browser, it is NodeJs, prompt() function works on Browser's engine only to take input from user as a pop notification

let name = "Dip Das"
let age = 21
let isLoggedin = false
let serverResponse = null
let noOfVisit;
let largeNumber = 7896541230125478n
let symbol = Symbol("I am a Symbol")

console.table([typeof name, typeof age, typeof isEnrolled, typeof serverResponse, typeof noOfVisit, typeof largeNumber, typeof symbol]);

/*Premetive-Datatypes in JS

 number => to store numerical and fractional value
string => we can use'' or "" both
bigint => store large number
boolean => true/value
null => it's a Standalone value but also a datatype(It is a representation of empty value but it is not like `let str = ""`)
undefined => when we declare variable but don't initialise any value
symbol => to achieve uniqueness

*/


//typeof is not a function, its a operator, it tells the type, it can be declare in two ways 
console.log(typeof "")            
console.log(typeof name)
console.log(typeof(name))

console.log(typeof null)        //output: object
console.log(typeof undefined)   //output: undefined
