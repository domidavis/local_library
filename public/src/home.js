const { getBooksPossessedByAccount } = require("./accounts");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.reduce((count, book) => {
    if (!book.borrows[0].returned) {
      count++;
    }
  return count;
  },0)
  return result;
}

function getMostCommonGenres(books) {
  const genreObj = {};
  books.forEach((book) => {
    if (genreObj[book.genre]) {
      genreObj[book.genre]++;
    }
    else {
      genreObj[book.genre] = 1;
    }
  });
    const genreNames = Object.keys(genreObj);
    const genresArray = [];
    for (let i = 0; i < genreNames.length; i++) {
       genresArray.push({ name: genreNames[i], count: genreObj[genreNames[i]] });
    }
    return genresArray.sort((genreA, genreB) => genreB.count - genreA.count).slice(0,5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  })
    .sort((a, b) => (b.count - a.count))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let person = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        person.count += book.borrows.length;
      }
    });
    result.push(person);
  });
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
