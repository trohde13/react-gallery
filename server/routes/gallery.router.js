const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;

    let queryText = `
        UPDATE "galleryItems"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;`
    pool.query(queryText, [id])
        .then((result) => {
            console.log(result.rows);
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);

        })
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "galleryItems" 
    ORDER BY "id" DESC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            res.sendStatus(500);
        })
    
}); // END GET Route

module.exports = router;