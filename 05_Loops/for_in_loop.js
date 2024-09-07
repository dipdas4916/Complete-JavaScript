// for in

/** It is returned the key of iterable object */

const myObj = {
    name : "Dip Das",
    age : 21,
    email : "dasdip4916@gmail.com"
}

for (const obj in myObj){
    // console.log(obj);       // It is directly returned the key of object myObj
}
for( const obj in myObj){
    console.log(myObj[obj]);
    
}

const myArr = ["c", "java", "javascript", "python", "cpp"]

for (const arr in myArr){
    console.log(arr);     //Output: 0 1 2 3 4, because for array keys are 0,1,2,3,4
}

for (const arr in myArr){
    console.log(myArr[arr]);
    
}


// But for map it is given error

const map = new Map()
map.set("IN","India")
map.set("USA","united States of America")
map.set("FR","France")

for (const m in map){
    console.log(m);    // It don't give any output not even any error
    
}

for (const [key, value] in map){
    console.log(key, ":- ", value); // Same, It also don't give any output not even any error
    
}