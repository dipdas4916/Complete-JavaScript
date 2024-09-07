/* CONVERSION  */

let score = "65"

console.log(typeof score)    //String

let scoreInNumber = Number(score)   //here string convert to Number, it is gurantee that it is convert with Number but not sure about the value

console.log(typeof scoreInNumber)    //Number
console.log(scoreInNumber)      //65

score = "95abc"
scoreInNumber = Number(score)
console.log(typeof scoreInNumber)   //Number
console.log(scoreInNumber)     //NaN => Not a Number

score = null
scoreInNumber = Number(score)
console.log(typeof scoreInNumber)    //Number
console.log(scoreInNumber + "for NULL")     //0

score = undefined
scoreInNumber = Number(score)
console.log(typeof scoreInNumber)   //Number
console.log(scoreInNumber)   //NaN => Not a Number

score = true
scoreInNumber = Number(score)
console.log(typeof scoreInNumber)  //Number
console.log(scoreInNumber)     //1 => for false it is 0


let anyValue = "";
let valueConvertToBoolean = Boolean(anyValue);
console.log(valueConvertToBoolean)   //Output: False

anyValue = "Dip";
valueConvertToBoolean = Boolean(anyValue);
console.log(valueConvertToBoolean)  //Output: True

anyValue = 0;
valueConvertToBoolean = Boolean(anyValue);
console.log(valueConvertToBoolean)       //Output: false

anyValue = 125;
valueConvertToBoolean = Boolean(anyValue);
console.log(valueConvertToBoolean)    //Output: True

anyValue = null;
valueConvertToBoolean = Boolean(anyValue);
console.log(valueConvertToBoolean)  //Output: False

anyValue = undefined;
valueConvertToBoolean = Boolean(anyValue);
console.log(valueConvertToBoolean)  //Output: False


let anyTypeVar = 34;
let anyVarConvertToString = String(anyTypeVar)
console.log(anyVarConvertToString)  //Output: 34
console.log(typeof anyVarConvertToString);  //Output: String


// ****************** Operations ***************** //


let value = 3
let negValue = -value
// console.log(negValue);


console.log(4**4);  // 4^4 = 16

console.log(5/4);
console.log(Math.floor(5/4));   //Output: 1
console.log(Math.ceil(5/4));//Output: 2
console.log(Math.round(5/4));    //Output: 1

console.log(5/"2");        //Output : 2.5

console.log(10*"5");  //Type Coercion: When the multiplication and division involves a number and a string, JavaScript tries to convert the string to a number. In this case, "2" or "5" can be converted to the number 2, resulting in 5 * 2 which equals 10.


console.log(789456/0);  //Output: Infinity

console.log(15%10);

console.log("2" + 3);   //Output: 23

console.log(2 + "3");   //Output: 23

console.log("2" + "3"); //Output: 23

console.log(2 + 2 + "3");   //Output: 43



console.log(+true); //Output: 1

//console.log(true+);  //Error

console.log(+"");   //Output: 0


