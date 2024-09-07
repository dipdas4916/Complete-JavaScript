let userEmail = "dip@gmail.com" //truthy vale
// userEmail = "" //falsy value
if(userEmail){
    console.log("Valid User Email");
    
}
else
    console.log("Invalid Email");
    

/* falsy values

 false, 0, -0, "", BigInt 0n, null, undefined, NaN  */


/* important truthy values

"false" , "0", " ", [], {}, function(){}  */




console.log("" == 0);
console.log(false == "");  // All Outputs are TRUE
console.log(false == 0);


/*  How to check whether an Array is empty or not. Because [] is a truthy value */

let anyArr = []

if(anyArr.length === 0)
    console.log("Array is empty!");
else
    console.log("Array contains some element");
    
    
/*  How to check whether an Object is empty or not. Because {} is a truthy value */

let anyObj = {}

if(Object.keys(anyObj).length === 0){   // Note: Object.keys(anyObj) => return an Array of keys
    console.log("Object is Empty!");
    
}
else
    console.log("Object contains some element");
    