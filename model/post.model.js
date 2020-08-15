const mongoose = require("mongoose")
var Post = mongoose.model('Post', {
    authername: {
        type: String
    },
    comment: {
        type: String
    },
    post: {
        type: String
    }
})

module.exports = { Post }