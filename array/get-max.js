function getMax(array) {
  if(array.length === 0) return undefined;

  let max = array[0];
  for (let i = 1; i < array.length; i++)
    if(array[i] > max)
      max = array[i];

  return max;
}

const numbers = [1, 2, 3, 12, 4, 5, 6];

console.log(getMax(numbers));
console.log(getMax([]));

/////////////////////////////////////////////////////////////////////////////////////

function getMaxWithReduce(array) {
  if(array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b) ? a : b);
}

console.log('-----------------------------------------------------------------------------');
console.log(getMaxWithReduce(numbers));
console.log(getMaxWithReduce([]));