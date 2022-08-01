//INDEX

//array
var numbers = [45, 68, 78, 56, 89, 98];

//1. get element value by index
// console.log(numbers[2]);
//output: 78 "index number starts with 0 so 2 number index position contains value 78"

//we can declare it in variable the console.log it
var element = numbers[2];
// console.log(element);

//2. set element value by index
numbers[1] = 77 //here the 2 index value was 68 but now it is changed to 77
// console.log(numbers); //output: [ 45, 77, 78, 56, 89, 98 ]
// console.log(numbers[1]); //output: 77

//3. find the index of an element
var positionIndex = numbers.indexOf(89);
// console.log(positionIndex);
//output: 4 cause 89 value is in 4 number index

//if we try to find a value index number where the value is not exist in the array, then the result will be -1.
var positionIndex = numbers.indexOf(189);
console.log(positionIndex);
//output: -1 cause 189 is not exist in the array so its index number is not found.



