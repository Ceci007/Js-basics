function move(array, index, offset) {
  const position = index + offset;

  if(position >= array.length || position < 0) {
    console.error('Invalid offset!');
    return;
  }

  const result = [...array];
  const element = result.splice(index, 1)[0];
  result.splice(position, 0, element);

  return result;
}

const numbers = [1, 2, 3, 4, 5];

console.log(move(numbers, 1, -2));
console.log(move(numbers, 0, 5));
console.log(move(numbers, 0, 3));
console.log(move(numbers, 1, -1));