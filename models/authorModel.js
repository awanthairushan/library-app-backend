const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    }
})

module.exports = mongoose.model("Author", authorSchema);