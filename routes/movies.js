const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.movies);

router.get('/movies/:id', moviesController.moviesId);


module.exports = router;