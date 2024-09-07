const currentDate = new Date()
console.log(currentDate);
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleString());
console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());

const myDateOfBirth = new Date('11-30-2002')

console.log(myDateOfBirth);

const age = ((currentDate - myDateOfBirth) / (1000 * 3600 * 24 * 365))

const month = (age - Math.floor(age)) * 12

const day = (age - Math.floor(age)) * 30

console.log(`My Current Age is : ${Math.round(age)} Years ${Math.round(month)} Months and ${Math.round(day)} Days`);