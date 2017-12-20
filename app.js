const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let sampleData = [{
    "month": "January",
    "neighborhood": "Highlands"
}, {
    "month": "February",
    "neighborhood": "Rino"
}, {
    "month": "March",
    "neighborhood": "Cap Hill"
}];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", function(request, response) {
    response.json({sampleData});
});

app.post("/", function(request, response) {
    response.send({
        message: "Request received",
        body: request.body
    });
});

app.listen(process.env.PORT || 3000);
