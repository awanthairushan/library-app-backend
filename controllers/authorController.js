const Author = require('./../models/authorModel');
const addAuthor = async (req, res) => {
    const {name} = req.body;
    if (name) {
        try {
            const author = await Author.create({
                name: name,
            })
            res.status(200).json({message: "Author registered successfully", data: author});
        } catch (error) {
            res.status(500).json({message: "Author register unsuccessful", data: error});
        }
    } else {
        res.status(400).json({message: "Author name is required", data: null});
    }
}

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json({message: "Authors synced successfully", data: authors});
    } catch (error) {
        res.status(500).json({message: "Author sync unsuccessful", data: error});
    }
}

const deleteAuthor = async (req, res) => {
    const author = await Author.findById(req.params.id);
    if (author) {
        try {
            await Author.findOneAndRemove(req.params.id);
            res.status(200).json({message: "Author deleted successfully", data: author});
        } catch (error) {
            res.status(500).json({message: "Author delete unsuccessful", data: error});
        }
    } else {
        res.status(200).json({message: "Author not found", data: null});
    }
}

const updateAuthor = async (req, res) => {
    console.log(req.params.id)
    const author = await Author.findById(req.params.id);
    if (author) {
        try {
            const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json({message: "Author updated successfully", data: updatedAuthor});
        } catch (error) {
            res.status(500).json({message: "Author update unsuccessful", data: error});
        }
    } else {
        res.status(200).json({message: "Author not found", data: null});
    }
}


module.exports = {addAuthor, getAuthors, deleteAuthor, updateAuthor}