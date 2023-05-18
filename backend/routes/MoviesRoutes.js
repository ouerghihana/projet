const express = require('express');
const movieRouter = express.Router();
const moviesControl = require('../controllers/MoviesControl');

// POST request to add a new movie
//http://localhost:4000/Movies
movieRouter.post('/', moviesControl.addMovie);

// DELETE request to delete a movie by ID
movieRouter.delete('/:id', moviesControl.deleteMovie);

// PUT request to update a movie by ID
//http://localhost:4000/Movies/:id
movieRouter.put('/:id', moviesControl.updateMovie);

// GET request to get a movie by ID
//http://localhost:4000/Movies/getAll/:id
movieRouter.get('/getAll/:id', moviesControl.getMovieById);

// GET request to get all movies
//http://localhost:4000/Movies/getAll
movieRouter.get('/getAll', moviesControl.getAllMovies);

module.exports = movieRouter;
