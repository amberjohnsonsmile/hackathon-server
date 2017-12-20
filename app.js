const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const crimeData = require("./parsedcrime.json");

let data = [{
    "month": "november",
    "crime": "criminal-trespassing",
    "date": "11/14/12",
    "lat": 39.738475,
    "lon": -105.0287401
}, {
    "month": "november",
    "crime": "criminal-trespassing",
    "date": "11/14/12",
    "lat": 39.738475,
    "lon": -105.0287401
}, {
    "month": "november",
    "crime": "criminal-trespassing",
    "date": "11/14/12",
    "lat": 39.738475,
    "lon": -105.0287401
}];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", function(request, response) {
    response.json({data: crimeData});
});

app.post("/", function(request, response) {
    response.send({
        message: "HooooOOOOOOOOOoooooowl",
        body: request.body
    });
});

app.listen(process.env.PORT || 3000);
