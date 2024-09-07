
// if

if (true) {
    console.log("Always Execute..");
}


if (false) {
    console.log("Never Execute..");
}
else{
    console.log("if condition never execute, then only else executed");
    
}


// > , < , >= , <= , == , === , != , !==

if(2=="2"){
    console.log("Normal Equals");
    
}

if(2==="2")
    console.log("Never Execute");
else
    console.log("Strict Equals");

if(5 >= 2) console.log("5 is greater than 2"), console.log("2 is less than 5"), console.log("2 and 5 are not Equals");

let val = 7

if (val === 5) {
    console.log(`${val} is exactly equals to 5`);
    
}
else if(val < 5){
    console.log(`${val} is exactly less than 5`);
}
else{
    console.log(`${val} is exactly greater than 5`);
}

