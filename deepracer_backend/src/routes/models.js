const firebase = require('../firebase.js');

const express = require('express')

const router = express.Router()


router.get("/", (req, res) => {
    // run function to get data from the database
    var collection = "models";
    firebase.getDataFromFirebase(collection)
        // return result (TODO: testing)
        .then((result) => {

            console.log("Original data:", result); // Log the original data

            // Sort the data by the "modelTime" field in ascending order
            var result = result.sort((a, b) => parseInt(a.modelTime, 10) - parseInt(b.modelTime, 10));

            // reformat
            var combinedObject = { data: result };

            // assign positions numbered from 1 for the quickest times
            combinedObject.data.forEach((item, index) => {
                item.position = index + 1;
            });


            console.log("Sorted and numbered data:", combinedObject.data); // Log the sorted data


            const jsonString = JSON.stringify(combinedObject);
            // do not return JSON. This is converted to JSON on the frontend.
            res.send(jsonString);
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
        // do not return json. this is converted to json in frontend
        res.send(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});


// insert user
router.post("/addModel", (req, res) =>{
    var collection = "models"
    const body = req.body
    try {
        // run function to put data in database
        firebase.putDataInFirebase(collection, body)
        res.status(201).json({ message: 'Model added successfully'});
        // console.log(body);
    } 
    // catch error and response 500
    catch (error) {
        res.status(500).json({ error: 'Data could not be added' });
        console.log(error)
    }
});

module.exports=router;