import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    
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
    };

    const valueToShare = {
        books,
        CreateBook,
        updateBookById,
        deleteBookById,
        fetchBooks,
    }


    return <BookContext.Provider value={{valueToShare}}>
        {children}
    </BookContext.Provider>
}

export {Provider};
export default BookContext;