const express = require("express");
// const cors = require("cors");
const app = express();
const PORT = 3001;
const { number } = require("prop-types");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://12345:12345@cluster0.svcmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
}
main().catch((err) => console.log(err));

const Book = require("./models/bookAndAuthor").Book;
const Author = require("./models/bookAndAuthor").Author;
const seedAuthor = require("./author_seed");
const seedBook = require("./book_seed");
const { FLIPPED_ALIAS_KEYS } = require("@babel/types");

// 0- ADDING FROM BOOKSEED AND AUTHORSEED
Book.insertMany(seedBook, (err, books) => {
  if (err) {
    console.log("ERROR AT INSERTING BOOKS FROM SEEDBOOK", err);
  }
  console.log(
    "Added Many books from seed, and their titles are:",
    books?.map((e) => {
      return { title: e.title };
    })
  );
  mongoose.connection.close();
});
Author.insertMany(seedAuthor, (err, authors) => {
  if (err) {
    console.log("ERROR AT INSERTING AUTHORS FROM SEEDAUTHOR", err);
  }
  console.log(
    "Added many authors from seed, And their names are:",
    authors?.map((e) => {
      return { name: e.name };
    })
  );
  mongoose.connection.close();
});

//   1- Adding two authors and two books
Author.insertMany([
  {
    name: "Dan Brown",
    age: 57,
    gender: "male",
    nationality: "USA",
    image:
      "https://www.arageek.com/wp-content/uploads/2018/04/danbrown1-e1523398747656.jpg",
  },
  {
    name: "Dennis Lehane",
    age: 56,
    gender: "male",
    nationality: "USA",
    image:
      "https://media.elcinema.com/uploads/_315x420_c12f760654447d57361088f265cd2d821f96794bdba275a97c0db186d60cee43.jpg",
  },
]);
Book.insertMany([
  { title: "The Da vinci code", pages: 400, price: 80, image: "#" },
  { title: "Shutter Island", pages: 300, price: 60, image: "#" },
]);

// 1- i) Finding all male authors
Author.find({ gender: "male" }, (err, authors) => {
  console.log(
    "All Male Authors:",
    authors?.map((e) => {
      return {
        name: e.name,
        age: e.age,
        nationality: e.nationality,
        gender: e.gender,
        books: e.books.map((ee) => ee.title).join(", "),
      };
    })
  );
});

// 1- ii) Finding all authors that age greater than 44
Author.find({ age: { $gt: 44 } }, (err, authors) => {
  console.log(
    "Authors older than 44:",
    authors?.map((e) => {
      return {
        name: e.name,
        age: e.age,
        books: e.books.map((ee) => ee.title).join(", "),
      };
    })
  );
});

// 1- iii) Finding all authors from kuwait
Author.find({ nationality: /^kuwait$/i }, (err, authors) => {
  console.log(
    "Authors from Kuwait:",
    authors?.map((e) => {
      return {
        name: e.name,
        nationality: e.nationality,
        books: e.books.map((ee) => ee.title).join(", "),
      };
    })
  );
});

// 1- iv) Finding all the books with titles starts with letter L (case insensitive)
Book.find({ $or: [{ title: /^l/ }, { title: /^L/ }] }, (err, books) => {
  console.log(
    "Books that has titles starts with letter L:",
    books?.map((e) => {
      return {
        title: e.title,
        pages: e.pages,
        price: e.price,
      };
    })
  );
});

// 1- v) Finding all books with number of pages greater than 250
Book.find({ pages: { $gt: 250 } }, (err, books) => {
  console.log(
    "Books that has more than 250 pages:",
    books?.map((e) => {
      return {
        title: e.title,
        pages: e.pages,
        price: e.price,
      };
    })
  );
});

// 2- a) Finding all authors from either Kuwait or Saudi Arabia
Author.find(
  { $or: [{ nationality: /^kuwait$/i }, { nationality: /^saudi arabia$/i }] },
  (err, authors) => {
    console.log(
      "Authors from either Kuwait or Saudi Arabia:",
      authors?.map((e) => {
        return {
          name: e.name,
          nationality: e.nationality,
          books: e.books.map((ee) => ee.title).join(", "),
        };
      })
    );
  }
);

// 2- b) Finding all authors older than 35 and have more than 3 books
Author.find(
  { $and: [{ "books.3": { $exists: true } }, { age: { $gt: 35 } }] },
  (err, authors) => {
    console.log(
      "Authors older than 35 that have more than three books:",
      authors?.map((e) => {
        return {
          name: e.name,
          nationality: e.nationality,
          books: e.books.map((ee) => ee.title).join(", "),
        };
      })
    );
  }
);

// 3- a) Finding all authors that don't have age key
Author.find({ age: { $exists: false } }, (err, authors) => {
  console.log(
    "Authors with age not specified:",
    authors?.map((e) => {
      return {
        name: e.name,
        age: e.age,
        books: e.books.map((ee) => ee.title).join(", "),
      };
    })
  );
});

// 4- a) Authors that are NOT saudis
Author.find(
  {
    nationality: {
      $not: /^saudi arabia$/i,
    } /* alternative (but a case sensetive one):{$ne: "Saudi Arabia"} */,
  },
  (err, authors) => {
    console.log(
      "Authors that are NOT Saudi Nationals:",
      authors?.map((e) => {
        return {
          name: e.name,
          nationality: e.nationality,
          books: e.books.map((ee) => ee.title).join(", "),
        };
      })
    );
  }
);

// 5- a) Update Osama Al Muslim age to be 45
Author.updateOne(
  { name: "Osama Al Muslim" },
  { $set: { age: 45 } },
  (err, authors) => {
    console.log(
      "Update Osama Al Muslim age to be 45, now he became one year older",
      authors?.map((e) => {
        return {
          name: e.name,
          nationality: e.nationality,
          books: e.books.map((ee) => ee.title).join(", "),
        };
      })
    );
  }
);

// 6- a) Remove all book that have price less than 50
Book.deleteMany({ price: { $lt: 50 } }, (err, res) => {
  console.log("Removed book cheaper than 50 riyals", res);
});
