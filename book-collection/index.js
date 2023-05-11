const express = require('express');
const app = express();

app.use(express.json());

let books = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
    author: req.body.author,
    publishedDate: req.body.publishedDate || null
  };

  books.push(book);
  res.json(book);
});

app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  books = books.filter(book => book.id !== bookId);

  if (books.length < booksCopy.length) {
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.json({ message: 'Book not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
