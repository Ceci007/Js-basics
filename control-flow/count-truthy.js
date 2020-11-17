/*
** List of falsy values:
** 1- undefined
** 2- null 
** 3- ''
** 4- false 
** 5- 0
** 6- NaN
*/

function countTruthy(array) {
  let count = 0;

  for(let value of array) 
    if(value) 
      count++;

  return count;
}

console.log(countTruthy([undefined, null, 0, 1, 'hello', true, 2, 3, '', false, NaN])) // 5

console.log(countTruthy([undefined, null, 0, '', false, NaN])); // 0

console.log(countTruthy([1, 2, 3])) // 3