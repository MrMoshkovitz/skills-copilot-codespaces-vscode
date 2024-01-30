// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comments controller
const controller = require('../controllers/comments.controller');

// Get all comments
router.get('/', controller.index);

// Create new comment
router.post('/', controller.create);

// Get comment by id
router.get('/:id', controller.get);

// Update comment by id
router.put('/:id', controller.update);

// Delete comment by id
router.delete('/:id', controller.delete);

// Export router
module.exports = router;
