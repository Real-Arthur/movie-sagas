const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  /*
  This JOIN works
SELECT * FROM "movies_genres"
JOIN "movies"
ON "movies_genres"."movies_id" = "movies"."id"
JOIN "genres"
ON "movies_genres"."genres_id" = "genres"."id";
  */
  res.sendStatus(500)
});

module.exports = router;