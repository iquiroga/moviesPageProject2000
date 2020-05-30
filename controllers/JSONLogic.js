const fs = require('fs');

let fnJSON = {
  moviesJSON: './data/movies.json',
  leerMoviesJSON: function () {
    return JSON.parse(fs.readFileSync(this.moviesJSON, 'utf-8'));
  }
}

module.exports = fnJSON;
