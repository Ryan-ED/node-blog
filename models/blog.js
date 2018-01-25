const mongoose = require("mongoose");

var blogSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model("Blog", blogSchema);