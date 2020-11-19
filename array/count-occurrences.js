function countOccurrences(array, searchElement) {
  let count = 0;


  for(let element of array)
    if (element === searchElement) 
      count++;
    
  return count;
}

const numbers = [1, 1, 2, 2, 3, 4, 5, 1];

console.log(countOccurrences(numbers, 1));
console.log(countOccurrences(numbers, 2));

///////////////////////////////////////////////////////////////////////////////////
function countOccurrencesWithReduce(array, searchElement) {
 return array.reduce((accumulator, currentValue) => {
   const occurrence = (currentValue === searchElement) ? 1 : 0;
   return accumulator + occurrence;
 }, 0);
}

console.log('-------------------------------------------------------------------');
console.log(countOccurrencesWithReduce(numbers, 1));
console.log(countOccurrencesWithReduce(numbers, 2));

