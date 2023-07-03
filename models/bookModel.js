const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    isbn: {
        type: Number,
        required: [true, "ISBN is required"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Author is required"],
        ref: "Author"
    }
})

module.exports = mongoose.model("Book", bookSchema);