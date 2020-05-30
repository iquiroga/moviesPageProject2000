const fnJSON = require('./JSONLogic');

let movies = fnJSON.leerMoviesJSON();

const moviesController = {
  movies: (req, res) => {
    res.send(movies);
  },
  moviesId: (req, res) => {
    idMovie = req.params.id - 1;
    res.send(movies[idMovie]);
  }
}

module.exports = moviesController;