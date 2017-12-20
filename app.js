const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let sampleData = [{
    date: 2017-12-20,
    type: "robbery"
}, {
    date: 2017-11-20,
    type: "assault"
}, {
    date: 2017-10-20,
    type: "murder"
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
