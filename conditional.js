var iphonePrice = 79000;
var myBudget = 95000;
//if iphone price is less than my budget, I will buy the phone

/**
 * if iphone price is less than my budget
 *      I will buy the phone
 * 
 * if (condition){
 *      // will execute if the condition is true
 * }
 */
// if (iphonePrice < myBudget){
//     console.log('iPhone kine futani marbo');
// }
//output: iPhone kine futani marbo //cause iphonePrice is less than myBudget

var chickenPrice = 500;
var myMoney = 50;
// if (chickenPrice <= myMoney){
//     console.log('Murgir raan khamu and haddi chibamu');
// }
//output: nothing //cause chickePrice is greater than myMoney

// if (chickenPrice > myMoney){
//     console.log('smashed potato and lentil soup');
// }

//Now write these two conditions above together
/**
 * if chicken price is less than my budget
 * I will eat chicken
 * na hole, othoba, else
 * I will eat potato
 */

if(chickenPrice < myMoney){
    console.log('I will eat chicken');
}
else{
    console.log('I will eat potato');
}
//output: I will eat potato
//cause: if condition is not full-filled or condition is false that's why the else is printed.