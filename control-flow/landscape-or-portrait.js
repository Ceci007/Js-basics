/* 
** Write a function that takes two arguments and 
** returns the true if is landscape and false otherwise.
*/

function isLandscape(width, height) {
  return (width > height);
}

console.log(isLandscape(800, 600));

console.log(isLandscape(400, 600));