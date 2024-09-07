const accountId = 12345678;   //Its a read only variable , we can't update or reassigned the value of accountId
let accountEmail = "dasdip4916@gmail.com";
var accountPassword = "Dip#Das";

accountCity = "Kolkata";  //There is no error to declare this type of variable, but it is not recomended because it is become a global varibale, and using "use strict" it gives error

let accountState;   //Whenever we declare a variable using let but don't initialise it with any value then its value is "undefined"

// accountId = 45698745;  //We can't change const variable , because it's a read only variable

accountEmail = "dipdas49164119@gmail.com";
accountPassword = "Das#Dip";
accountCity = "Bhubeneshwar";

/*
Prefer not to use var
Because of issue in block scope and functional scope
and we can declare var variable again
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  //It is used to show the output on a tabular format f