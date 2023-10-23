const firebase = require('../firebase.js');

const express = require('express')

const router = express.Router()


router.get("/", (req, res) =>{
    // run function to list all collections from database
    firebase.listAllCollections()
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

//Get Average_Rewards from Reward_Metrics doccument of selected Collection/model.
router.get("/:name/reward-metrics", (req, res) => {
    const collectionName = req.params.name;
    firebase.getRewardMetrics(collectionName)
        .then((average_rewards) => {
            res.send({ average_rewards });
        })
        .catch((error) => {
            console.error("Error: ", error);
            res.status(500).send(error.message);
        });
});


//Get speed and steer angle by checkpoint data of selected collection/model.
router.get("/:name/avg-speed-steering", (req, res) => {
    const collectionName = req.params.name;
    firebase.getSpeedAndSteer(collectionName)
        .then((avg_speed_steering) => {
            res.send({ avg_speed_steering });
        })
        .catch((error) => {
            console.error("Error: ", error);
            res.status(500).send(error.message);
        });
});

module.exports=router;