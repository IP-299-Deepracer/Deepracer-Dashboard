const firebase = require('../firebase.js');

const express = require('express')

const bodyParser = require('body-parser');

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));


router.get("/", (req, res) =>{
    // run function to get data from database
    var collection = "teams"
    firebase.getDataFromFirebase(collection)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});


router.post("/", (req, res) =>{
    var collection = "teams"
    const body = req.body
    try {
        // run function to put data in database
        firebase.putDataInFirebase(collection, body)
        res.status(201).json({ message: 'Data added successfully'});
        // console.log(body);
    } 
    // catch error and response 500
    catch (error) {
        res.status(500).json({ error: 'Data could not be added' });
        console.log(error)
    }
});


router.get("/:name", (req, res) =>{
    // run function to get data from database
    const name = req.params.name
    var collection = "teams"
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