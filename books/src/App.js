import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";

function App() {

    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    const CreateBook = (title) => {
        const updateBooks = [...books, {id: Math.round(Math.random() * 999), title}];
        setBooks(updateBooks);
        console.log('book: ', books);
    };

    const updateBookById = (id, newTitle) => {
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBook);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onUpdate={updateBookById} />
            <BookCreate onCreate={CreateBook} />
        </div>
    )
}

export default App;