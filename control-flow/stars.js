function showStars(rows) {
  for(let row = 1; row <= rows; row++) {
    let pattern = '';
    for(let i = 1; i <= row; i++)
      pattern += '*';

    console.log(pattern);
  }
}

showStars(5);