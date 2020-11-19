function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === searchElement)
      return true;

  return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(includes(numbers, 2));