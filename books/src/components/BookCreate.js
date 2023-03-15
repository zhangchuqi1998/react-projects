import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookCreate() {

    const [title, setTitle] = useState('');
    const { createBook } = useContext(BookContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    } 

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Created!</button>
            </form>
        </div>
    )
}

export default BookCreate;