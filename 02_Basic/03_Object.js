/*** Object can be defined in two ways (i) Using Literals or (ii) Using Constructor ******/

//Singleton: When we make an object using Constructor then Singleton is created. But when we create an object using literals then Singleton is not created.

// Object.create()

//Object Literals:

let Jsuser = {
    name:"Dip Das",//It is same as "name" : "Dip Das"
    age: 22,
    "email": "dasdip4916@gmail.com",
    location: "Kolkata",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "wednesday", "Saturday"]
}

//How can we access array

console.log(Jsuser.name);
//console.log(Jsuser."email"); //It's an error. when we made an key using "" then we can't access using . Operator. We must have acessed it using [""]

console.log(Jsuser["email"]);


//Declare a Symbol and add it as a key in an Object and print it (Symbol used as a Key)

const mySym = Symbol("key1")

// Jsuser = {
//     mySym : "key1" //It is not a correct syntax
// }
// console.log(Jsuser["mySym"]);
// console.log(typeof Jsuser["mySym"]);  //It is not an Symbol.

Jsuser = {
        name:"Dip Das",
        age: 22,
        "email": "dasdip4916@gmail.com",
        location: "Kolkata",
        isLoggedIn: false,
        lastLoggedInDays: ["Monday", "wednesday", "Saturday"],
    [mySym] : "key1" //we can add a symbol using key only byusing []
}
console.log(Jsuser[mySym]);
 console.log(Jsuser);

 //How to change values of an Object

 Jsuser.age = 21

 //How to lock an Object, after locking object can't be updated

//  Object.freeze( Jsuser)
//  Jsuser.name = "Hitesh"  //It is not executed. But it is not given any error
 console.log(Jsuser);


 /***** Add a Function into Jsuser Object *****/

Jsuser.greeting = function(){
    console.log("Hello Js User");
    
}

 Jsuser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`); //this referes to the current object
    
 }

 console.log(Jsuser.greeting);     //undefined, Function return back is printed
 console.log(Jsuser.greeting()); 
 

 console.log(Jsuser.greetingTwo());
 
 
 