
// Nullish Coalescing Operator ( ?? ) : It is generally used to overcome the problem assing `NULL` and `UNDEFINED` value to any variable

let val1;
val1 = 10 ?? 15  //Output: 10
val1 = null ?? 25  //Output: 25
val1 = 35 ?? undefined  //Output: 35
val1 = null ?? undefined ?? 50 ?? 75  //Output: 50  // if multiple value present then first not null or not undefined value will assign


console.log(val1);
