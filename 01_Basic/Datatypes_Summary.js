//In JS basically datas are categorized into two categories: 1. Primitive 2. Non-Primitive (Reference Types).

//Here this categorization is made on the basis of How data can store inside the memory and how can we access the data from the memory.

/* Primitive Datatypes: These types of variable are call by value type. When we access these variable then one copy is given to us, not the original reference to the variable is given.

in JS there are 7 types of Primitive Datatypes present: Number, Null, Boolean, BigInt, String, Symbol, Undefined 

Number: All types of number like integar, floating point all types of numbers are come into these categories.

Null: It means empty, but not "" let take an example, let say we make an weather api, when there is a glitch to requesr the tempareture from the server then server will send NULL value not 0 or Something. So NULL means nothing.  (** Note: typeof null: Object **)

Undefined: It means when we define one variable but initialise it then it call undefined. We can directly initialise the variable with Undefined also.

Bigint: It used to stored large type of Number, basicaly scientific calculations BigInt is used.
let bigintEx = 896574123056n;


Symbol: It is used to make the value unique, if we store the same two values in Symbol then also these are not Equals.
 
*/
let bigintEx = 896574123056n;
console.log(bigintEx);
let symbol1 = Symbol(5)
let symbol2 = Symbol(5)

console.log(symbol1==symbol2);
console.log(symbol1===symbol2);

/*
Non-Primitive Datatypes or Reference Types: When we store or used these type of variable then we directly used the memory reference of these variable not any copy.

Mainly there are three types of Non-Primitive datatypes present in JS: Objects, Array, Functions

Objects: 


*/

//Array
const heroes = ["Shaktiman", "Naagraj", "Doga"];
//Object
const myObj = {
    name: "Dip",
    age: 21
}
//Function
const myFunction = function(){
 console.log("Hello World");
}
myFunction
console.log(myFunction);

/*** All Non-Primitive Datatypes types are Object basically. type of Functions are  Object Function*/


/*** Difference Between == and === ***/

// == : Check only value, do not bother about type
// === : Check value along with type also

console.log("3" == 3);    //True
console.log("3" === 3);   //False
