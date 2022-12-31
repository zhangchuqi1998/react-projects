import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book, onDelete, onUpdate}) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onUpdate={onUpdate} handleEditClick={handleEditClick} />;
    }

    return (
        <div className="book-show">
        <img alt="books" src="https://picsum.photos/300/200" />
        <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
        
    )
}

export default BookShow;