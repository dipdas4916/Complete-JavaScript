/****** Function is a group of Code or Instructions, by which we can perform a task repeatedly when it is called **********/

function addition(number1, number2){  //addition(arg1,arg2)
    if(!number1 || !number2)  
        return null
    return number1 + number2
}
let r = addition(5,6)
if(!r)          //Note: Generally if(NULL), if(undefined), all are returned false
    console.log("Please Check the parameters");
    
else
    console.log(`Addition result = ${r}`);


function greeting(str){
    if(!str)         //If str = undefined, then greeting() returns `UNDEFINED`
        return
    else
        console.log(`Welcome ${str} into This JavaScript Course`);
        
}



function anotherGreetring(str = "Your Name"){   //NOTE: if str is undefined means we don't provide any parameter then "Your Name" is acting as default
    console.log("Good Morning ",str);
    
}

console.log(typeof greeting())

anotherGreetring()

anotherGreetring("Dip Das")


//Rest Operator ...

function calculateCartPrice(...num1){   // Here ... operator add all the element and make an Array
    return num1
}
//Output: [10, 20, 450, 589, 1457]
console.log(calculateCartPrice(10,20,450,589,1457));

function calculateCartPrice1(val1, val2, ...num1){
    return num1
}   //Output: [450, 589, 1457]

console.log(calculateCartPrice1(10,20,450,589,1457));



function handleArray(anyArr){
    let sum = 0;
    for(i=0;i<anyArr.length;i++){
        sum += anyArr[i]
    }
    return sum
}

let myArr = [451, 120, 325, 20]

console.log("Sum of the Array is: ", handleArray(myArr));

console.log("Sum of the Array is: ", handleArray([785, 568, 521, 457, 632, 201, 965]));


let user = {
    userName: "dipdas",
    price: 1200
}

function handleObject(anyObj){
    if((typeof(anyObj) === typeof({})) && (!Array.isArray(anyObj))){
        if(!anyObj.userName && !anyObj.price){
            console.log(`Username is : ${anyObj.userName} and the price is: ${anyObj.price}`);
        }
    }
     else{
        return
     } 
    
}

// let myArr = [451, 120, 325, 20]

if(!handleObject(myArr)){
    console.log("Please check the Parameter!!");
    
}
else
    handleObject(myArr);



// handleObject({
//     userName:"dasdip",
//     price:1099
// });

let f1 = function(){
    console.log("Hello World!");
    
}

f1()

//fun2() //It gives error, variable used before initialization

let fun2 = function(){
    console.log("Hello");
    
}







