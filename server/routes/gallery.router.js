const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put(':id', (req, res) => {
    console.log(req.params);
    const queryText = `
    UPDATE "galleryItems"
    SET "likes" = $2
    WHERE "id" = $1`
    pool.query(queryText, [req.params.id, req.params.likes])
        .then((result) => {
            const galleryId = req.params.id;
            for(const galleryItem of result) {   
                if(galleryItem.id == galleryId) {
                    galleryItem.likes += 1;
                }
            }
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