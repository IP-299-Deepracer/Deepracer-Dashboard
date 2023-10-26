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
        const combinedObject = { data: result };
        const jsonString = JSON.stringify(combinedObject);
        // do not return json. this is converted to json in frontend
        res.send(jsonString)})
    .catch((error) => {
        console.error("Error: ", error);});
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

// check whether a user is already a member of a team
router.get("/checkMembership/:uid", (req, res) =>{
    // run function to get data from database
    const UID = req.params.uid
    firebase.checkTeamMembership(UID)
    // return result (TODO: testing)
    .then((result) => {
        // do not return json. this is converted to json in frontend
        res.send(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});


// update user team membership on creation of team
router.post("/updateUserDocTeam", (req, res) => {
    var collection = "teams"
    const team = req.body.team
    try {
        // run function to put data in database
        firebase.putDataInFirebase(collection, team)
        // res.status(201).json({ message: 'Data added successfully'});
        // console.log(body);
    } 
    // catch error and response 500
    catch (error) {
        res.status(500).json({ error: 'Data could not be added' });
        console.log(error)
    }
    
    // run function to get data from database
    const UID = req.body.uid
    const teamName = req.body.teamName
    firebase.updateUserDocTeam(UID, teamName)
    // return result (TODO: testing)
    .then((result) => {
        // do not return json. this is converted to json in frontend
        res.send(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});


// return team based on teamName
router.get("/:name", (req, res) =>{
    // run function to get data from database
    const name = req.params.name
    var collection = "teams"
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


// get specific team code based on teamName as a json (to avoid it thinking its a response code)
router.get("/code/:teamName", (req, res) =>{
    // run function to get data from database
    var teamName = req.params.teamName
    firebase.getTeamFromName(teamName)
    .then((result) => {
        // extract teamCode and return
        var code = result[0].teamCode;
        // console.log(code.toString());
        res.json({"code": code})})
    .catch((error) => {
        console.error("Error: ", error);});
});

module.exports=router;