const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//Simple request time logger
app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    //function route handler.
    next();
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});