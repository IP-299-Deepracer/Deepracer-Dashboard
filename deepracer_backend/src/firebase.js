// require firebase-admin module
const admin = require("firebase-admin");

// require service account key
const serviceAccount = require("../deepracer-52ec7-firebase-adminsdk-z1mqa-0560f04062.json");

// initialise database connection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/u/0/project/deepracer-52ec7/firestore",
});

const db = admin.firestore();

// get data from collection in database
exports.getDataFromFirebase = async (collectionName) => {
    try {
        const snapshot = await db.collection(collectionName).get();
        // create list
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


// put data from frontend in a collection in database
exports.putDataInFirebase = async (collectionName, body) => {
    try {
        db.collection(collectionName).add(body);
        return true;
    } 
    // catch error and response 500
    catch (error) {
        console.error("Error adding data to Firebase: ", error);
        return error;
    }
};

// get data from collection in database
exports.getDataFromFirebaseID = async (collectionName, documentName) => {
    try {
        const collection = db.collection(collectionName);
        const query = collection.where("name", "==", documentName)
        const snapshot = await query.get()
        // create list
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