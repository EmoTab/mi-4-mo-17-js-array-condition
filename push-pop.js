var numbers = [78, 45, 98, 45];
// console.log(numbers);
//output: [78, 45, 98, 45]

//1. add a value in the array using push()
numbers.push(63); //used push to add element to an array as the last element of the array
// console.log(numbers); 

//another example
var friends = ['balam', 'kalam', "salam"];
friends.push('gelam');
friends.push("pailam")
// console.log(friends);
//output: ['balam', 'kalam', 'salam', 'gelam', 'pailam']

//2. remove a value from the array, using pop() js will remove the last value from array, it means without giving value inside pop.
friends.pop(); //it will remove the last value 'pailam'
// console.log(friends);
//output: ['balam', 'kalam', 'salam', 'gelam'] //if we add more pop() it will remove another lastest value from the array

//3. push an pop can return value
var friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friends);
var element = friends.pop();
console.log(friends);
console.log(element);

//google it: how to add a value in index first position using push
//google it: how to remove a value from index first position using pop