// setup server 
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
const noteRouter= require("./route/noteRoute");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use("/api/v1",noteRouter);

app.get("/",function(req,res){
    res.send("server Started ......")

});

app.listen(3000, () => {
  console.log('server start.....');
})