// setup server 
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
var storeRoute = require('./route/store.route');
var bookRoute = require('./route/book.route');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());


app.use("/api/v1" , storeRoute);
app.use("/api/v1" , bookRoute);

app.get("/",function(req,res){
    res.send("server Started ......")

});

app.listen(3000, () => {
  console.log('server start.....');
})