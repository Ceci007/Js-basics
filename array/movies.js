/*
** Return all the movies in 2021 with rating > 4
** sort them by their rating
** put them in descending order
** finally pick their title
*/

const movies = [
  { title: 'a', year: 2020, rating: 4.5 },
  { title: 'b', year: 2020, rating: 4.7 },
  { title: 'c', year: 2021, rating: 3 },
  { title: 'd', year: 2021, rating: 4.1 },
  { title: 'e', year: 2021, rating: 4.5 }
];

const result = movies 
  .filter(m => m.year === 2021 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(result);