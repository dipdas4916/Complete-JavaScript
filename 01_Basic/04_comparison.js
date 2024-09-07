console.log(5>1);
console.log(5<1);
console.log(5>=1);
console.log(5<=1);
console.log(5!=1);

console.log("2" > 1);   //These type of conversion means different datatype convertion must be avoid , Because it delivers unexpected result
console.log("02" > 1);   //These type of conversion means different datatype convertion must be avoid , Because it delivers unexpected result


//Note: In JS >, <, == these acts differently, and >=, <= these acts differently 
console.log(null > 0);  //Output: false   
console.log(null == 0); //Output: false     
console.log(null >= 0); //Output: true (here null convert to 0)


console.log(undefined > 0);  //Output: false   
console.log(undefined == 0); //Output: false     
console.log(undefined >= 0); //Output: false


// ***  Difference Between == and ===   *** //

console.log("2" == 2);    //Here only value will check, means "2" convert to Number then equality will check. 
console.log("2" === 2);  //It is Strict type checking, Because it will deliver true if and only if both value and datatype both are must be same
