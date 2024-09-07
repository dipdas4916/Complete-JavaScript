// ++++++++++++++++++++++ this ++++++++++++++++++++++++++

const user = {
    name: "dip",
    age : 21,
    welcomeMessage: function(){
        // console.log(`${this.name} Welcome to JavaScript Playlist`);
        // console.log(this);  //here this refers to the user object and print user object   
    }
}

// console.log(this);  
//++++++++++++++++++++++++++++++++++++             Output: {}, because for NODE Environment `this` refers empty object basically. But for Browser `this` generally refers to the Window object. In browser Global object is Window object                    ++++++++++++++++++++++++++++++++++++++++++++++++++++


// this: it refer to the current context

// user.welcomeMessage

// user.welcomeMessage()

// user.name = "Hitesh"

// user.welcomeMessage()

function chai(){
    let userName = "dipdas"
    console.log(this);   //Output: Object [global]{.................................}
    console.log(this.userName);//Output: undefined. Because it is only acceptable on Object.
    
    
}

chai()




//+++++++++++++++++++++++++++++ arrow() +++++++++++++++++++

const chaiAurCode = () => {
    let userName = "dipdas"
    console.log(this.userName);  //Output: undefined
    console.log(this); //Output: {} [blank object]   
}

chaiAurCode()

let addTwo = (num1, num2) => { 
    return num1 + num2
}

console.log(addTwo(7,5))

// Implesive return

let add = (num1, num2) =>  num1 + num2 

console.log(add(45, 65))

let addition = (n1, n2) => (n1 + n2)

console.log(addition(5, 3))

let temp = () => ({name:"Dip"})

console.log(temp());

//NOTE: When we use {} in arrow function then we must have to write return, but if we write () then we don't have to write return



