const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');

app.listen(3000, () => console.log('Running Server'));

app.get('/', indexRouter);
app.get('/movies', moviesRouter);
app.get('/movies/:id', moviesRouter);
