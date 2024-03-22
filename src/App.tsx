import React, { useState } from 'react';
import './App.css';


type Book = {
  title: string;
  author: string;
  year: number;
  image: string;
};

const App = () => {
  
  const [books, setBooks] = useState<Book[] | undefined>(undefined);
  const [showBooks, setShowBooks] = useState(true);

  const populateBooksVariable = () => {
    const booksData: Book[] = [
      { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein', year: 1989, image: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF894,1000_QL80_.jpg' },
      { title: 'The art of computer programming', author: 'Donald Knuth', year: 1968, image: 'https://m.media-amazon.com/images/I/81eZ5mt0TGL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'Refactoring improving the design of existing code', author: 'Martin Fowler, Kent Beck', year: 1999, image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d26356e6-bfff-44d7-9041-a6d88e8d35f3.__CR197,0,1105,1383_PT0_SX362_V1___.jpg' }
    ];
    setBooks(booksData);
  };

  const removeBooksVariable = () => {
    setBooks(undefined);
  };

  return (
    <div>
      <h1>Lista de Libros</h1>
      <button onClick={populateBooksVariable}>Populate books variable</button>
      <button onClick={removeBooksVariable}>Remove Books Variable</button>
      {books === undefined ? (
        <p>No hay datos de libros disponibles</p>
      ) : showBooks ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p>Autor: {book.author}</p>
              <p>Año: {book.year}</p>
              <img src={book.image} alt={book.title} style={{ maxWidth: '200px' }} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;
