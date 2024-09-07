/**** There are two types of memory present basically, where variables are stored in JS.
 1. Stack Memory: Where all the primitive types variables are stored. Here we provide only a copy not reference of original memory location. So if we changes anything then it will be only on Copy Variable, not original variable.

 2. Heap Memory: Where all the non-primitive types of variables are stored. Here directly reference of original memory location will be provided, so if we changes on anything that changes will be held on the variable also.

 Examples:=>
 ****/

    let primitiveVar = "Dip Das"
    let anotherPrimitiveVar = primitiveVar

    anotherPrimitiveVar = "Das Dip"

    console.log(primitiveVar);      //Changes happends on anotherPrimitiveVar variable only

    console.log(anotherPrimitiveVar);




    let user = {
        email : "dasdip4916@gmail.com",
        upi : "dasdip4916@okaxis"
    }

    let anotherUser = user
    anotherUser.email = "dipdas49164119@gmail.com"

    console.log(user.email);
    console.log(anotherUser.email);   //Changes happend on both 
