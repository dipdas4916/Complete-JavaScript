// Immediately Invoked Function Expression : The function which execute immediately, and by which global variables are not create any pollutions.
// Mainly Invoked function used to conncet database code function inside IIFE.
//named IIFE

let anyName = "Dip Das";  //here ; is must.

( function chai(name) {
    console.log(`Congratulations ${name}, DB Connected Successfully`);
    
})(anyName); // For executing next line ; is also must here.

( () => {
    console.log("DB Connection close");
    
} )()