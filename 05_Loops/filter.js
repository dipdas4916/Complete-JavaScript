
//filter

const myNums = [1,2,,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 6)  // filter() method just check the condition and if it's true then it's return those element only. It does not return the whole array

console.log(newNums);

const newNums1 = myNums.filter( function (num) {
    return num < 5
})

console.log(newNums1);

// using forEach

const newArr = []

myNums.forEach( (num) => {
    if(num<6)
    {
        newArr.push(num);
    }
})
console.log(newArr);

// filetr() in Object-Array

const objectArr = [
    {
        "bookName": "Book_01",
        "genre": "Fiction",
        "publishYear": 1996,
        "ediition": 2005
    },
    {
        "bookName": "Book_02",
        "genre": "History",
        "publishYear": 2012,
        "ediition": 2016
    },
    {
        "bookName": "Book_03",
        "genre": "Non-Fiction",
        "publishYear": 2004,
        "ediition": 2010
    },
    {
        "bookName": "Book_04",
        "genre": "Science",
        "publishYear": 2009,
        "ediition": 2015
    },
    {
        "bookName": "Book_05",
        "genre": "History",
        "publishYear": 2003,
        "ediition": 2006
    }, 
    {
        "bookName": "Book_06",
        "genre": "Fiction",
        "publishYear": 1990,
        "ediition": 1998
    }
]

const myGenre = objectArr.filter( (bk) => bk.genre == "History")

console.log(myGenre);





