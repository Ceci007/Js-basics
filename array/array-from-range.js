function arrayFromRange(min, max) {
  output = [];

  for (let i = min; i <= max; i++)
    output.push(i);
  
  return output;
}

console.log(arrayFromRange(-4, 7));