import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";

function BookList({books, onDelete, onUpdate}) {

    const {count, incrementCount} = useContext(BookContext);

    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} onUpdate={onUpdate} key={book.id} book={book} />;
    })

    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Count</button>
            {renderedBooks}
        </div>
    )
}

export default BookList;