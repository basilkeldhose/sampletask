const express = require("express")
var router = express.Router()
var ObjectId = require("mongoose").Types.ObjectId
var { Post } = require("../model/post.model")

router.post("/", (req, res) => {
    var post = new Post({
        authername: req.body.authername,
        comment: req.body.comment,
        post: req.body.post
    })
    post.save((err, doc) => {
        if (!err) {
            res.send(doc)
            console.log("details saved")
        }
        else {
            console.log("error to save auther details" + JSON.stringify(err, undefined, 2))
        }
    })
})

router.get("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("no auther record with this autherid")

    Post.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            console.log("error to retrive the auther details" + JSON.stringify(err, undefined, 2))
        }
    })

})
router.post("/update", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("no auther record with this autherid")
    var post = {
        authername: req.body.authername,
        comment: req.body.comment,
        post: req.body.post
    }
    Post.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            console.log("error to update details" + JSON.stringify(err, undefined, 2))
        }
    })


})

router.delete("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("no auther record with this autherid")

    Post.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            console.log("error to delete details" + JSON.stringify(err, undefined, 2))
        }

    })

})

module.exports = router