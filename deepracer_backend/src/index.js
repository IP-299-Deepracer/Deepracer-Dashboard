const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

const teamsRoute = require('./routes/teams.js')
const modelsRoute = require('./routes/models.js')
app.use("/teams", teamsRoute)
app.use("/models", modelsRoute)


// // log time of requests to backend
// app.use(function(req, res, next){
//     console.log("A new request received at " + Date.now());
//     //This function call is very important. It tells that more processing is
//     //required for the current request and is in the next middleware
//     //function route handler.
//     next();
// });


// // test endpoint
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });


// app.get('*', (req, res) => {
//     res.send('Sorry, this is an invalid URL.');
// });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});