/*
** Rules:
** Divisible by 3 => Fizz
** Divisible by 5 => Buzz
** Divisible by both 3 and 5 => FizzBuzz
** Not divisible by 3 or 5 => input
** Not a number (NaN) => 'Not a number' or NaN
*/

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return 'Not a number: ' + NaN;

  if (input % 15 === 0)
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz';

  return input;
}

const output1 = fizzBuzz(false);
console.log(output1);

const output2 = fizzBuzz(7);
console.log(output2);

const output3 = fizzBuzz(3);
console.log(output3);

const output4 = fizzBuzz(5);
console.log(output4);

const output5 = fizzBuzz(15);
console.log(output5);