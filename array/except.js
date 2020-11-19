function except(array, excluded) {
  const result = [];

  for (let element of array) 
   if (!excluded.includes(element))
    result.push(element);

  return result;
}

const numbers = [1, 1, 2, 2, 3, 4, 5, 2, 1, 1];
const output = except(numbers, [1, 2]);
console.log(output);