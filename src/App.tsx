import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from './GetBookQuery';

// Define the type for the data returned by the query
interface Book {
  title: string;
  author: string;
}

interface BooksData {
  books: Book[];
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery<BooksData>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book List</h1>
      </header>
      <div className="TimeContainer">
        {data?.books.map(({ title, author }) => (
          <div key={title} className="TimeItem">
            <h3>{title}</h3>
            <p>{author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
