function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid argument, first argument must be an array type.');

  return array.reduce((accumulator, currentValue) => {
    const occurrence = (currentValue === searchElement) ? 1 : 0;
    return accumulator + occurrence;
 }, 0);
}

try {
  const numbers = [1, 1, 2, 2, 3, 4, 5, 1];
  
  console.log(countOccurrences(numbers, 1));
  console.log(countOccurrences(numbers, 2));
  console.log(countOccurrences(true, 1));
}
catch(e) {
  console.log(e.message);
}
