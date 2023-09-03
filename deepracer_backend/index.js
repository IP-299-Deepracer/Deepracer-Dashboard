const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// require firebase-admin module
const admin = require("firebase-admin");

// require service account key
const serviceAccount = require("./deepracer-52ec7-firebase-adminsdk-z1mqa-0560f04062.json");

// initialise database connection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/u/0/project/deepracer-52ec7/firestore"
});
const db = admin.firestore();

// get data from collection in database
const getDataFromFirebase = async (collectionName) => {
    try {
        const snapshot = await db.collection(collectionName).get();
        // create dict
        const data = [];

        // push each doc from collection to list
        snapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });

        return data;

    } 
    // catch error
    catch (error) {
        console.error("Error getting data from Firebase: ", error);
        throw error;
    }
};

// get data from collection in database
const getDataFromFirebaseID = async (collectionName, documentName) => {
    try {
        const collection = db.collection(collectionName);
        const query = collection.where("name", "==", documentName)
        const snapshot = await query.get()
        // create dict
        const data = [];

        // push each doc from collection to list
        snapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });

        return data;

    } 
    // catch error
    catch (error) {
        console.error("Error getting data from Firebase: ", error);
        throw error;
    }
};


// log time of requests to backend
app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    //function route handler.
    next();
});


// test endpoint
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/teams", (req, res) =>{
    // run function to get data from database
    var collection = "teams"
    getDataFromFirebase(collection)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});

app.get("/team/:name", (req, res) =>{
    // run function to get data from database
    const name = req.params.name
    var collection = "teams"
    getDataFromFirebaseID(collection, name)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});

app.get("/models", (req, res) =>{
    // run function to get data from database
    var collection = "models"
    getDataFromFirebase(collection)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});

app.get("/model/:name", (req, res) =>{
    // run function to get data from database
    const name = req.params.name
    var collection = "models"
    getDataFromFirebaseID(collection, name)
    // return result (TODO: testing)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
});

app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});