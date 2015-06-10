// Write a function that takes nested arrays and turns it into nested objects.
//
// var books = [
//   ["Learn to Program", "Chris Pine", 1934356360],
//   ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
// ]
//
// bookData(books)
// //-> {
//   "1934356360": {
//     "title": "Learn to Program",
//     "author": "Chris Pine",
//     "isbn10": 1934356360
//   },
//   "1593275846": {
//     "title": "Eloquent Javascript",
//     "author": "Marijn Haverbeke",
//     "isbn10": 1593275846
//   }
// }

var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]

var bookData = function(array){
  bookObj = {}
  array.forEach(function(book){
    bookObj[book[2]] = {
      "title": book[0],
      "author": book[1],
      "isbn10": book[2]
    };
  });
  return bookObj;
};

console.log(bookData(books));
