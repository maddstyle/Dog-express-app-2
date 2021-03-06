const express = require("express");

const app = express();

// if u type route "/" response will be "HI!"
app.get("/", function (req, res) {
    app.send("Hi, there!")
});
// if u type route "/bye" response will be "BYE!"
app.get("/bye", function (req, res) {
    app.send("Goodbye!")
});
// if u type route "/dog" response will be "WOOF!"
app.get("/dog", function (req, res) {
    app.send("Woof!")
});

app.listen(3000, () => {
    console.log("Running on port: 3000")
});