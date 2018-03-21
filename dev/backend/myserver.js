let express = require("express");
let bodyParser = require("body-parser");

let tijRouter = require("./tijRouter");
let tijRouterManager = require("./tijRouterManager");


let app = express();

app.use(bodyParser.json());

app.use("/api", tijRouter);

app.use("/apim", tijRouterManager);


app.listen(3001);
console.log("Running on port 3001");