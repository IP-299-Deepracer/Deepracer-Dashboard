const firebase = require('../firebase.js');

const express = require('express')

const bodyParser = require('body-parser');

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));


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