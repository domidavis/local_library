function findAccountById(accounts, id) {
  for (let item in accounts) {
    if (id === accounts[item].id) {
      let userAccount = accounts[item];
      return userAccount;
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i in books) {
    let borrows = books[i].borrows;
    for (let j in borrows) {
      if (account.id === borrows[j].id) {
        total++;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksArr = [];
  books.forEach(book => {
    if (book.borrows.find(item => item.id === account.id && !item.returned)) {
      booksArr.push(book);
    }
  })
  booksArr.forEach(book => {
    let matchingAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = matchingAuthor;
  })
  return booksArr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
