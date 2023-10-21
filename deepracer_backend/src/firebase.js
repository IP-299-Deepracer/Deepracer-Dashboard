// require firebase-admin module
const admin = require("firebase-admin");

// require service account key
const serviceAccount = require("../deepracer-52ec7-firebase-adminsdk-z1mqa-0560f04062.json");

// initialise database connection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/u/0/project/deepracer-52ec7/firestore"
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

//list all collections by name
exports.listAllCollections = async () => {
    try {
        // get a list of all collections
        const collectionsList = await db.listCollections();
        
        // map the collections to an array of their names
        const collectionNames = collectionsList.map(collection => collection.id);
        
        return collectionNames;
    } catch (error) {
        console.error('Error listing collections:', error);
        throw error;  // re-throw the error after logging it
    }
};

//get Average_Rewards from Reward_Metrics of selected Collection.
exports.getRewardMetrics = async (collectionName) => {
    try {
        const doc = await db.collection(collectionName).doc('reward_metrics').get();
        if (!doc.exists) {
            throw new Error('Backend Err: Document does not exist/could not be found');
        }
        const average_rewards = doc.data().average_rewards;
        return average_rewards;
    } catch (error) {
        console.error('Backend Err: Error fetching average reward metrics of doccument:', error);
        throw error;
    }
};