// for of

const myArr = ["c", "java", "javascript", "python", "cpp"]

for (const i of myArr) {
    console.log(i);
}

const greetings = "Hello, World!"

for( const greet of greetings){
    console.log(greet);
    
}

// Map: It is similar to object, here data also stores in key-value pair. But here keys are non duplicate and it maintains the same order always.

const map = new Map()
map.set("IN","India")
map.set("USA","united States of America")
map.set("FR","France")

for (let m of map){
    console.log(m);  // here m is return as an array of [key, value]
    
}
for (let [key, value] of map){
    console.log(key, ":- ", value);  // here m is return as an array of [key, value]
}


const myObj = {
    name : "Dip Das",
    age : 21,
    email : "dasdip4916@gmail.com"
}


// here it is giving error, because Object is not iterable. We can't use for-of loop in Object, so that's why for-in loop comes into mind.....
for (const obj of myObj){
    console.log(obj);  
}