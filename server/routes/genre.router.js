const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  /*
  SELECT *
  FROM movies
  JOIN movies_genres
  ON movies.genre_id = movies_genres.movie_id
  JOIN genres
  ON genres.id = movies_genres.genres_id   
  */
  res.sendStatus(500)
});

module.exports = router;