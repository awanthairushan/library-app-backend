const express = require('express')
const router = express.Router();
const {addAuthor, getAuthors, deleteAuthor, updateAuthor} = require('../controllers/authorController')

router.route('/').post(addAuthor)
router.route('/').get(getAuthors)
router.route('/:id').delete(deleteAuthor)
router.route('/:id').put(updateAuthor)

module.exports = router;