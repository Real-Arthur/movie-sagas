const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GETS all movies in each genre
router.get('/', (req, res) => {
  console.log('GENRE ROUTER ALL GET', req)
  const genreQuery = `SELECT "name", array_agg("title")
  FROM "genres"
  JOIN "movies_genres"
  ON "genres"."id" = "movies_genres"."genres_id"
  JOIN "movies"
  ON "movies_genres"."movies_id" = "movies"."id"
  GROUP BY "genres"."id";`;
  pool.query(genreQuery)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('ERROR GENRE ROUTER', error);
    res.sendStatus(500);
  });
})

// GETS all genres of a specific movie
router.get('/:id', (req, res) => {
  console.log('GENRE ROUTER ID GET', req)
  // Query to get genre list for specific movie
const genreQuery = `SELECT "name" FROM "movies_genres"
JOIN "movies"
ON "movies_genres"."movies_id" = "movies"."id"
JOIN "genres"
ON "movies_genres"."genres_id" = "genres"."id"
WHERE "movies_id" = $1;`;
pool.query(genreQuery, [req.params.id])
.then((result) => {
  res.send(result.rows);
})
.catch((error) => {
  console.log('ERROR GENRE ROUTER', error);
  res.sendStatus(500);
});
})

module.exports = router;