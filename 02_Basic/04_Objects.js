//Singleton

const tinderUser = new Object()

tinderUser.id = 101
tinderUser.name = "Dip Das"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    2:"c",
    3:"d"
}
const obj3 = {
    4:"e",
    5:"f"
}

const obj_1 = {obj1,obj2,obj3} //Here inside obj there is three individual object present. So it is not the ideal trick to merge object

//const obj = Object.assign({},obj1,obj2,obj3) //Here all the objects are assigned to the first parameter. Here first parameter is blank object so all the objects merged to the blank object

const obj = {...obj1, ...obj2, ...obj3}

// console.log(obj);

/******************** Nested Object ***************************/

let regularUser = {
    email : "dipdas@gmail.com",
    fullname: {
        userFullName :{
            firstName: "Dip",
            lastName: "Das"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.firstName);

/********* Objects inside an Array******************/

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

// console.log(user[2].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //Here all output are given as an Array

/******* To check */

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +++++++++++ Object Destructuring  ++++++++++++++++

const myObj = {
    name: "Dip Das",
    courseName: "JS in Hindi",
    courseInstructure: "Hitesh Choudhury",
    price:"free",
    courseValidationInMonths:2
}

    const {courseValidationInMonths:validation} = myObj; //Inspite of using myObj.courseValidationInMonths every time, we can directly write validation to fetch the value

console.log(validation);



/*********JavaScript Object Notation ************/

/**
 API: Application Programming Interface, roughly we can say whenever we have to assign a task to another person then API comes to mind..
   Generally some set of values comes from backend now we can write this value, this phenomena is known as API.
    Now a days values comes from backend in JSON fromat...

    Now let see how JSON look like:->
     NOTE:=>In JSON value can come in both the format either Object or  Array.
 */
// {
//     "id":101,
//     "name":"Dip Das",
//     "age": 21,
//     "email": "dasdip4916@gmail.com"
//     "isLoggedIn":true
// }














