function _findById(array, id) {
  let found = array.find((element) => element.id === id);
  return found;
}
function findAuthorById(authors, id) {
  return _findById(authors, id);
}

function findBookById(books, id) {
  return _findById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
    let borrowedBooks = books.filter(book => book.borrows[0].returned === false);
    let returnedBooks = books.filter(book => book.borrows[0].returned === true);
    let partitionedBooks = [borrowedBooks, returnedBooks];
    return partitionedBooks;
}

function getBorrowersForBook(book, accounts) {
  let borrowersArr = [];
  const { borrows } = book;
  for (let borrow of borrows) {
    let found = accounts.find((account) => account.id === borrow.id);
    found.returned = borrow.returned;
    borrowersArr.push(found);
  }
  return borrowersArr.slice(0, 10);
}
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
