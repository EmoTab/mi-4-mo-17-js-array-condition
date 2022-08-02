var isGraduated = true;
var salary = 25000;
var cars = 0;

//single condition

// if (isGraduated == true){
//     console.log('Eso biye kore feli');
// }
// else{
//     console.log('Tok kopale biya nai');
// }
//output: Eso biye kore feli
//cause the condition is full filled

//double conditions

//to full fill both conditions use &&
// if (isGraduated == true && salary > 50000){
//     console.log('Eso biye kore feli');
// }
// else{
//     console.log('Tor kopale biya nai');
// }
//output: Tor kopale biya nai
//cause: isGraduated condition is true but salary condition is fale where we have to full fill both condition. So, condition is false, else will be executed. Double amperson (&&) says you have to full fill both conditions.


// if (isGraduated == true && salary > 50000 && cars >= 1){
//     console.log('Eso biye kore feli');
// }
// else{
//     console.log('Tor kopale biya nai');
// }
// output: Tor kopale biya nai
//only one condition is full-filled but other two conditions are not. Where && says have to full-fill all conditions


//to full fill any one of many conditions use ||
// if (isGraduated == true || salary > 50000 || cars >= 1){
//     console.log('Eso biye kore feli');
// }
// else{
//     console.log('Tor kopale biya nai');
// }
//output: Eso biye kore feli
//cause: at least one condition is full-filled. Where || says, you have to full-fill one condition.

// now we can set have to full-fill two condition using and or mean && ||
if (isGraduated == true && salary > 50000 || cars >= 1){
    console.log('Eso biye kore feli');
}
else{
    console.log('Tor kopale biya nai');
}
//here have to full-fill isGraduate and salary both or car condition

//now we can set you must full-fill specific one condition then you have to full-fill any one amoung others
if (isGraduated == true && (salary > 50000 || cars >= 1)){
    console.log('Eso biye kore feli');
}
else{
    console.log('Tor kopale biya nai');
}
//here you must have to full-fill the isGraduate condition then you have choice to full-fill one between salary and cars.