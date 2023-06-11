// Destructuring Arrays and Objects

// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);
//
// const { a: aa, b: bb, c: cc } = { a: 1, b: 2, c: 3 };
// console.log(aa, bb, cc);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

// Destructuring

const [, , third] = books;
console.log(third);

const { author, rating } = books[2];
console.log(author, rating);

// Destructuring Objects

const { title: bookTitle, author: bookAuthor, rating: bookRating } = books[2];

console.table([bookTitle, bookAuthor, bookRating]);
