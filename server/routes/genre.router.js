const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('GENRE ROUTER GET', req)
  // Add query to get all genres
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