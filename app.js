const express = require("express");
var bodyParser = require("body-parser")

const MongoClient = require("mongodb").MongoClient;

var jsonParser = bodyParser.json();

const app = express();

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

var dbClient;

app.use(express.static(__dirname + "/public"));


mongoClient.connect(function(err, client) {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("test-lesson").collection("users");
    app.listen(3000, function() {
        console.log("Сервер ожидает подключения...");


    });


});
// GET LIST OF REQUEST

app.get("/api/admin", function(req, res) {


    const collection = app.locals.collection;
    collection.find().toArray(function(err, users) {
            /* console.log(users); */
            let data = JSON.stringify(users);
            console.log(data);
            res.send(data);
        })
        /* console.log(user);
        console.log(data); */
        /* res.send(user); */
});

/* function allUsers() {
    const collection = app.locals.collection;
    collection.find().toArray(function(err, users) {
       
        var data = users;
        return data;
    })


}; */

app.post("/api/test-lesson", jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);

    var userName = req.body.name;
    var userEmail = req.body.email;
    var userPhone = req.body.phone;
    console.log("userEmail 0 " + userEmail);
    var user = { name: userName, email: userEmail, phone: userPhone };

    const collection = req.app.locals.collection;

    collection.insertOne(user, function(err, result) {

        if (err) return console.log(err);

        console.log("request is ok")

        /*         var users = JSON.stringify(user); */

        res.sendStatus(200);
    });
});

app.delete("/api/admin", function(req, res) {
    users = JSON.parse;
    const collection = req.app.locals.collection;
    collection.deleteMany()

    res.sendStatus(200);
});



/* app.post('api/test-lesson', jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);

    const userName = req.body.name;

    console.log("req.bodyq " + req.body.name);
    const userEmail = req.body.email;
    const userPhone = req.body.phone;
    const user = { name: userName, email: userEmail, phone: userPhone };
    console.log("userEmail 0 " + userEmail);
    const collection = req.app.locals.collection;
    res.status(200);
 */
/* collection.insertOne(user, function(err, result) {

    if (err) return console.log(err);

    console.log("request is ok")

    res.send(req.body);
}); */
/* }); */

/* let isOk = true; */

/* res.send(isOk); */
/* res.render("") */
/* }); */



/* app.put("/api/users", jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const userName = req.body.name;
    const userAge = req.body.age;

    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({ _id: id }, { $set: { age: userAge, name: userName } }, { returnOriginal: false }, function(err, result) {

        if (err) return console.log(err);
        const user = result.value;
        res.send(user);
    });
});
app.use("/", router);
 */
// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});