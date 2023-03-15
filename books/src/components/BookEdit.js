import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookEdit({book, onSubmit}) {

    const [title, setTitle] = useState(book.title);
    const {updateBookById} = useContext(BookContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        updateBookById(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;