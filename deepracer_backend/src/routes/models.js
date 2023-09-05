const firebase = require('../firebase.js');

const express = require('express')

const router = express.Router()


router.get("/", (req, res) =>{
    // run function to get data from database
    var collection = "models"
    firebase.getDataFromFirebase(collection)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});


router.get("/:name", (req, res) =>{
    // run function to get data from database
    const name = req.params.name
    var collection = "models"
    firebase.getDataFromFirebaseID(collection, name)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});


module.exports=router;