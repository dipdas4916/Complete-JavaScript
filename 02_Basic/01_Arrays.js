//+++++++++++++++++ In JS Arrays are basically an Object, here Array is resizable, we can store any type of value +++++++++++++++++++++++++++++++

const myArr = [1,2,3,4,5,true,"Dip Das"]    //We Can define an Array using Square Bracet and can store any types of value

console.log(myArr);

const newArr = new Array(0,2,3,4,5)   //It is another types of declaration of an Array


console.log(typeof newArr); //Object

console.log(newArr[4]);  //We can get any element of an Array using Square Bracet. In JS Arrays are zero-indexed based

console.log(newArr["one"]); //We can't access any element by using any String. It's an Error



//++++++++++++++++++ In JS Arrays are passed as Shallow Copies, means if we change anything it is directly affected on Actual Arrays +++++++++++++



/******************************  Some Mostly used Properties of Arrays are ********************************/

newArr.push(10) //It is used to append 10 to the last position of newArr
console.log(newArr); 

newArr.pop()  //It is used to delete an element from the last of an Array
console.log(newArr);

newArr.unshift("First Element")  //newArr.unshift(n), insert element n to the First position of newArr array
console.log(newArr);

newArr.shift()   //newArr.shift() is used to delete the first element from an Array
console.log(newArr);

console.log(newArr.length);  //length is not a Function, it's a property, used to know the length of an Array


// ++++++++++++++++++++++++++++++++ join() +++++++++++++++++++++++++++++++++++++++

const myArr1 = newArr.join()  //join() method convert newArr arrays's each element into string and insert it into another string, each element of newArr is separated by comma(,)
console.log("newArr ", newArr);
console.log(typeof myArr1[0]); //each elemnt of myArr1 is a String
console.log(typeof myArr1); //myArr1 is whole a String

console.log("myArr1 ",myArr1);   //myArr1 type is String


// +++++++++++++++++++++   Yes/No/value type function of an Array   +++++++++++++++++++++++++++++++++++++

console.log(newArr.includes(9));  //includes() check if 9 present in newArr or not. If yes then return true otherwise return false

console.log(newArr.indexOf(5));  //newArr.indexOf(n) check the index of n into newArr array and return the index, if the n is not present inside newArr then it returns -1 // newArr: [0,2,3,4,5]


// ++++++++++++++++++++ Difference between slice() and splice()  ++++++++++++++++++++++++++++++

const newArr2 = newArr.slice(1,3)       //newArr.slice(a,b) is return the subarray of newArr of 1 and 2 no. indexes element (3 is excluded here)
console.log("Original Array ",newArr);
console.log("Slice Array ",newArr2);


const newArr3 = newArr.splice(1,3);     //newArr.splice(a,b) is return the subarray of newArr of 1,2 and 3 no. indexes element (3 is included here) and in newArr Array the elements of indexes 1,2 and 3 are removed
console.log("Original Array ",newArr);
console.log("Splice Array ",newArr3);