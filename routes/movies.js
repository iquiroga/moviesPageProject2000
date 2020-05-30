const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.movies);
router.get('/:id', moviesController.moviesId);

module.exports = router;