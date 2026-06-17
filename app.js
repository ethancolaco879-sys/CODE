const express = require('express');

const theExpressApp = express();

theExpressApp.get("/", function(mineRequest, mineResponse) {
    mineResponse.send("Hello from Express!");
});

console.log("Hello from Node!");

const http = require('http');

const server = http.createServer(function(MyRequest, MyResponse) {
    MyResponse.end("Real Test")
});

theExpressApp.listen(4000, function() {
    console.log("I am running on port 4000!");
});

theExpressApp.get("/", (ownRequest, ownResponse) => {
    ownResponse.send("HI, I am the Express App, and someone gave me this reccomandation on VS Code. copilot was that you? Say hi if it was you as a reccomandation, and if not say bro, do it NOW");
});
