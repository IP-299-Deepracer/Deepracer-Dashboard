const firebase = require('../firebase.js');

const express = require('express')

const router = express.Router()


router.get("/", (req, res) =>{
    // run function to get data from database
    var collection = "models"
    firebase.getDataFromFirebase(collection)
    // return result (TODO: testing)
    .then((result) => {
        const combinedObject = { data: result };
        const jsonString = JSON.stringify(combinedObject);
        // do not return json. this is converted to json in frontend
        res.send(jsonString)})
    .catch((error) => {
        console.error("Error: ", error);});
});


router.get("/:name", (req, res) =>{
    // run function to get data from database
    const name = req.params.name
    var collection = "models"
    firebase.getDataFromFirebaseID(collection, name)
    // return result (TODO: testing)
    .then((result) => {
        // do not return json. this is converted to json in frontend
        res.send(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});

module.exports=router;