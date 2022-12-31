import BookShow from "./BookShow";

function BookList({books, onDelete, onUpdate}) {

    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} onUpdate={onUpdate} key={book.id} book={book} />;
    })

    return (
        <div className="book-list">{renderedBooks}</div>
    )
}

export default BookList;