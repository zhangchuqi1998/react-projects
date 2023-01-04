import { useState, useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";
import axios from "axios";

function App() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const deleteBookById = async (id) => {
        await axios.delete('http://localhost:3001/books/' + id);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    const CreateBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updateBooks = [...books, response.data];
        setBooks(updateBooks);
    };

    const updateBookById = async (id, newTitle) => {
        const response = await axios.put('http://localhost:3001/books/' + id, {
            title: newTitle,
        });
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return response.data;
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