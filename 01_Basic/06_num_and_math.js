const balance = 400    //It is convert to number then stored at balance variable
console.log(balance);
const anotherBalance = new Number(100)  //We can define Number in both way, here it is strictly a Number
console.log(anotherBalance);
console.log(balance);


console.log(typeof balance.toString());  //toString() is used to convert a number into string
console.log(balance.toString().length);

const num = 36.854
console.log(num.toFixed(2)); //toFixed(n) it defines after decimal only n no. of digits are printed

console.log(num.toPrecision(3)); //toPrecision(n) it will print exact n no. by considering decimals left and right 

const hundreds = 100000000
console.log(hundreds.toLocaleString()); //toLocaleString() this method print the number using comma, to increase the redeability. By default it's value American standard

console.log(hundreds.toLocaleString('en-IN')); //It follows Indian Standard

const highestNum = Number.MAX_VALUE
console.log(highestNum);   //Inside number we can store Maximum this number

const lowestNum = Number.MIN_VALUE
console.log(lowestNum);  //Inside number we can store Minimum this number

const safeInt = Number.MAX_SAFE_INTEGER
console.log(safeInt);  //Inside number we can store this highest Integer


// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++  

console.log(Math);  //Math is a object in JavaScript, where many inbuilt properties are stored. Mostly used properties are:

const anyNumber = -458.365
console.log(Math.abs(anyNumber));  //Math.abs(n) this function convert the number into positive number, if its a positive number then it will not changed anything

console.log(Math.round(anyNumber));  //Math.round(n) it returns the integer number of n

console.log(Math.ceil(anyNumber));

console.log(Math.floor(anyNumber));

console.log(Math.min(45,87,25,12,56));  //Math.min() works on Array. It will return the minimum element from an array which will provided

console.log(Math.min(45,87,25,12,56));  //Math.min() works on Array. It will return the maximum element from an array which will provided

const max = 6  //max and min variable is used to select the range of random number
const min = 1  

console.log(Math.floor((max - min + 1) * Math.random() + min ));  //+1 is added to avoid the 0 and min is added to get the value getter than or eqaul to min

console.log(Math.pow(2,10));  // 2^10 

console.log(Math.sqrt(25));   //25^(-1/2)