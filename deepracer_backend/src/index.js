const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

const teamsRoute = require('./routes/teams.js');
const modelsRoute = require('./routes/models.js');
const usersRoute = require('./routes/users.js');
const raceLeaderboardRoute = require('./routes/raceLeaderboard.js');
const notebookRoute = require('./routes/notebook.js');

// ADD ALL THE ROUTES TO THE APP
// const visRoute = require('./routes/vis.js') // this is unused but is here for the sake of completeness
app.use("/teams", teamsRoute);
app.use("/models", modelsRoute);
app.use("/users", usersRoute);
app.use("/raceLeaderboard", raceLeaderboardRoute);
app.use("/notebook", notebookRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
