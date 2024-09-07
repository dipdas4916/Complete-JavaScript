

// In JavaScript String can be declared in two ways:=>
    
    let stringOne = "I am a String"   //let stringOne = 'I am a String'  //let stringOne = `I am a String`
    let stringTwo = new String("Dip Das")
    
    console.log(`First String is ${stringOne} and \nSecond String is ${stringTwo}`);   //This is the best approach 
    
    console.log(typeof stringTwo);  //Output: Object, 
    console.log(typeof stringOne);  //Output: String
    
    /**  Differnce between String Primitive and String Object **/
/*
1. Immutibility:
String Primitive: Immutable, meaning their values cannot be changed once created.
String Object: Mutable, meaning their values can be changed. However, this is generally discouraged due to performance reasons and potential for unexpected behavior.

2. Methods:
String Primitive: Although primitives, JavaScript automatically wraps them with String objects when you access their methods. This means you can still use methods like toUpperCase(), substring(), etc., on string primitives.
 
   String Object: Has all the same methods as a string primitive, but since it's an object, it also inherits methods from the Object prototype.

3.  Performance:
String Primitive: More efficient in terms of memory and performance because they are stored directly as values.
String Object: Less efficient due to the overhead of creating and managing objects.
*/


/*

0: "D"
1: "i"
2: "p"
3: " "
4: "D"
5: "a"
6: "s"
length: 7


[[Prototype]]: String
anchor:ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
....etc

Here are some important and mostly used String inbuild properties
*/

console.log(`Instance properties of the Strings are:=>\n`);
let lengthOfFirstString = stringOne.length;    //length is a key of String object it's not Function
console.log(lengthOfFirstString)

let lengthOfSecondString = stringTwo.length
console.log(lengthOfSecondString);

console.log(`Another instance property of String\n`);
console.log(`Output of indexStart property: ${stringOne.indexStart}`);  //It is generally used in Substring function
console.log(`Output of indexEnd property: ${stringOne.indexEnd}`);   //It is generally used in Substring function

console.log(`\nOutput of charAt()\n`);
for(let i=0;i<stringOne.length;i++)
{
    console.log(stringOne.charAt(i));       //Used to get every element of a String by the index

}

console.log(`\n\nOutput of indexOf()\n\n`);
for(let i=0;i<stringOne.length;i++)
    {
        let c = stringOne.charAt(i)
        console.log(stringOne.indexOf(c));   //Used to get the index of any element, if any element repeated two or more times then indexOf() returned the first occurence of the element
}

console.log(`\n\nOutput of subString()\n\n`);
console.log(stringOne.substring(0,10));      // subString() used to print a small string from the big-string and return the charters between these index, here last index is exclusive
console.log(stringOne.substring(stringOne.indexStart,stringOne.indexEnd));   //indexStart : it returns the first index of the string, it is not a function, Same for indexEnd: it returns the last index of the string

console.log(`\n Output of toLowerCase() \n`);
console.log(stringOne.toLowerCase());

console.log(`\n Output of toUpperCase() \n`);
console.log(stringOne.toUpperCase());

console.log(`\n Output of replace() \n`);    //Its replace the first group of character to second group of character
console.log(stringOne.replace('I am','This is'));

console.log(`\n Output of endsWith() and startWith()\n`);
console.log(`String starts with 'I' TRUE or FALSE: ${stringOne.startsWith('I')} and ends with 'word' TRUE or FALSE: ${stringOne.endsWith('word')}`);

stringTwo = "   Dip    Das     "
console.log(`\n Output of trim()\t it basically remove the extra space from the starting and ends from a String\n`);
console.log(stringTwo.trim());

console.log(`\nOutput of Slice()\n`);
console.log(stringOne.slice(-stringOne.indexStart));   //slice() is worked as same as subString(), but in slice() we can put negative index also, that replicates the index from last of the string

//stringOne = stringOne.concat(stringTwo)
console.log(stringOne.concat(stringTwo));

