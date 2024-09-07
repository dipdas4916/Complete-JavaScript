
// Map() is similar to forEach(), it is works on whole Array and return the whole array, not like filter()

//here we have to perform some operations, it does not check conditions
const myNums = [1,2,3,4,5,6,7,8,9,10]

const modifyNums = myNums.map( function(num) { 
    return num + 10
})

console.log(modifyNums);

const mySelection = myNums.map( (num) => num * 10)

console.log(mySelection);

// we can add multiple function at single time

const multiple = myNums.map( (num) => num * 10).map((num) => num + 10).filter( (num) => num < 60)

console.log(multiple);
