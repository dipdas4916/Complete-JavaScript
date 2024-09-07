
// forEach

/** The best way to traverse the array is forEach loop. It is mostly used */

// here inside forEach() we have to call a call back function.

const myArr = ["c", "java", "cpp", "python", "javascript"]

myArr.forEach( function (item) {
    console.log(item);
    
});

myArr.forEach( (item) => {
    console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}

myArr.forEach(printMe)  // we can't write myArr.forEach(printMe())

const map = new Map()
map.set("IN","India")
map.set("USA","united States of America")
map.set("FR","France")

map.forEach( (m) => {
    console.log(m);    // here directly value will be printed
})

//let's now see what's more present inside forEach

myArr.forEach( (item, index, array) => {
    console.log(item, index, array);
})



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

objectArr.forEach( (element) => {
    console.log(element['genre']);
    
})
//Note: forEach( ) did not return anything. If we have to return some value then we have to use  filter()