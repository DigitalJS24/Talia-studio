const express = require("express");
var bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient;

var jsonParser = bodyParser.json();

const app = express();

app.post('public/js/lesson.js', jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);

    const userName = req.body.name;

    console.log("req.bodyq " + req.body.name);
    const userEmail = req.body.email;
    const userPhone = req.body.phone;
    const user = { name: userName, email: userEmail, phone: userPhone };
    console.log("userEmail 0 " + userEmail);
    const collection = req.app.locals.collection;
    collection.insertOne(user, function(err, result) {

        if (err) return console.log(err);

        console.log("request is ok")

        res.send(req.body);
    });
});