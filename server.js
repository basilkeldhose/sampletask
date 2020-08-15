const express = require("express")
const bodyparser = require("body-parser")


const { mongoose } = require("./db")
var postcontroller = require("./controllers/post.controller")


var app = express()



app.use(bodyparser.json());

app.listen(3000, () => { console.log("server connected sucessfully...") })

app.use('/post', postcontroller)