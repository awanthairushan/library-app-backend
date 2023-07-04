const express = require('express')
const router = express.Router();
const {addBook, getBooks,deleteBook, updateBook} = require('../controllers/bookController')

router.route('/').post(addBook)
router.route('/').get(getBooks)
router.route('/:id').delete(deleteBook)
router.route('/:id').put(updateBook)

module.exports = router;