
// reduce(): It is generally used to add all the element of an Array

const myArr = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myArr.reduce( function(accumulator, currentIndex) {
    return accumulator + currentIndex
}, 0)

console.log(myTotal);

// now add extra 5 then add all the element

const additionNum = 5

const modifyTotal = myArr.reduce( (accumulator, currentIndex) => accumulator + currentIndex , additionNum)

console.log(modifyTotal);

const myCart = [
    {
        courseName : "JavaScript",
        coursePrice : 999,
        courseDurationInMonth : 2
    },
    {
        courseName : "Full Stack",
        coursePrice : 5999,
        courseDurationInMonth : 4
    },
    {
        courseName : "Data Science",
        coursePrice : 7999,
        courseDurationInMonth : 5
    },
    {
        courseName : "Mern Stack",
        coursePrice : 8999,
        courseDurationInMonth : 6
    }]

    const totalAmountToBePaid = myCart.reduce( (accumulator, currentIndex) => 
        accumulator + currentIndex.coursePrice, 0)

    console.log(totalAmountToBePaid);

    
    
