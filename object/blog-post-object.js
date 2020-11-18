/*
** Create a blog post object:
** title
** body 
** author
** views 
** comments: (author, body)
** isLive
*/

let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [
    { author: 'a1', body: 'b1' },
    { author: 'a2', body: 'b2' },
    { author: 'a3', body: 'b3' }
  ],
  isLive: true
};

console.log(post);