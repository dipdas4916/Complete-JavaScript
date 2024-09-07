const marvel_heroes = ["Thor", "Ironman", "Hulk"]

const dc_heroes = ["Superman", "Batman", "Fash"]

const indian_heroes = ["Bahubali","Krish","Shaktiman"]

 marvel_heroes.push(dc_heroes)      //marvel_heroes.push(dc_heroes) used to append dc_heroes into marvel_heroes and it is return the new length of marvel_heroes. But here whole dc_heroes add at index 3 as a whole array. Because JS can allow any type of element in Array
 console.log(marvel_heroes);

//to get the element "Batman" from marvel_heroes 
 console.log(marvel_heroes[3][1]);

 const foreign_heroes = marvel_heroes.concat(dc_heroes) //It concat two string and return a new String. Here each elements are single not any arrays, each element are individual.
 console.log(foreign_heroes);



/****************************** Spread Operator ***********************/

const all_heroes = [...marvel_heroes, ...dc_heroes, ...indian_heroes]//Generally it is used to merge arrays. Here we can merge any number of arrays. Here also each element are individual.
console.log(all_heroes);
console.log(typeof all_heroes);

/********************************* flat() *****************************/

let another_array = [4, 5, [6, 7],[8,9,[1,2,3]]]
let real_another_array = another_array.flat(Infinity) //flat(n) It is flat the array upto n depth, if you provide depth as Infinity then it is convert all the element individually
console.log(real_another_array);


/***********************convert into array ****************************/

console.log(Array.isArray("Dip Das")); // Output: False

console.log(Array.from("Dip Das")); //Convert the string into Array, and here each alphabets is an Array element

console.log(Array.from({name:"Dip", Age: 21})); //Here it is unable to convert this Object into array because we have not specify that array made with key or element // It give a blank array as an output

let num_1 = 100
let num_2 = 200
let num_3 = 300

console.log(Array.of(num_1, num_2, num_3)); //Array.of() put all the variable inside an array and return the array 

