const Book = require('./../models/bookModel')
const addBook = async (req, res) => {
    const {name, isbn, author} = req.body;
    if (name && isbn && author) {
        try {
            const book = await Book.create({
                name: name,
                isbn: isbn,
                author: author.id
            })
            res.status(200).json({message: "Book saved successfully", data: book});
        } catch (error) {
            res.status(500).json({message: "Book save unsuccessful", data: error});
        }
    } else {
        res.status(400).json({message: "All fields are required", data: null});
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author')
        const mappedBooks = books.map(book => ({
            id: book._id,
            name: book.name,
            isbn: book.isbn,
            author: {id: book.author?._id, name: book.author?.name}
        }))
        res.status(200).json({message: "Books synced successfully", data: mappedBooks});
    } catch (error) {
        res.status(500).json({message: "Books sync unsuccessful", data: error});
    }
}

const deleteBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
        try {
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Book deleted successfully", data: book});
        } catch (error) {
            res.status(500).json({message: "Book delete unsuccessful", data: error});
        }
    } else {
        res.status(200).json({message: "Book not found", data: null});
    }
}

const updateBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
        const mappedBook = {
            id: req.body.id,
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.author.id
        }
        try {
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, mappedBook, {new: true});
            res.status(200).json({message: "Book updated successfully", data: updatedBook});
        } catch (error) {
            res.status(500).json({message: "Book update unsuccessful", data: error});
        }
    } else {
        res.status(200).json({message: "Book not found", data: null});
    }
}


module.exports = {addBook, getBooks, deleteBook, updateBook}