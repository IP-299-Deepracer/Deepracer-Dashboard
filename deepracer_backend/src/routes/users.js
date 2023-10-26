const firebase = require('../firebase.js');

const express = require('express')

const bodyParser = require('body-parser');

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));

// import { UserContext } from '../../../deepracer_dashboard/src/UserContext.js';

// get all users
router.get("/", (req, res) =>{
    // run function to get data from database
    var collection = "users"
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


// get specific user team based on uid
router.get("/:uid", (req, res) =>{
    // run function to get data from database
    var userID = req.params.uid
    // var collection = "users"
    firebase.getUserFromUID(userID)
    // return result (TODO: testing)
    .then((result) => {
        // extract teamName and return
        var teamName = result[0].teamName;
        res.send(teamName)})
    .catch((error) => {
        console.error("Error: ", error);});
});

// get specific user team based on uid
router.get("/email/:uid", (req, res) =>{
    // run function to get data from database
    var userID = req.params.uid
    // var collection = "users"
    firebase.getUserFromUID(userID)
    // return result (TODO: testing)
    .then((result) => {
        // extract teamName and return
        var email = result[0].email;
        res.send(email)})
    .catch((error) => {
        console.error("Error: ", error);});
});


// insert user
router.post("/addUser", (req, res) =>{
    var collection = "users"
    const body = req.body
    try {
        // run function to put data in database
        firebase.putDataInFirebase(collection, body)
        res.status(201).json({ message: 'User added successfully'});
        // console.log(body);
    } 
    // catch error and response 500
    catch (error) {
        res.status(500).json({ error: 'Data could not be added' });
        console.log(error)
    }
});

module.exports=router;