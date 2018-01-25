//Require Modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//App config
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//Mongo config
mongoose.connect("mongodb://localhost/node_blog");
    //Require models
const Blog = require("./models/blog");
    //Seed DB
const seed = require("./seed");
//seed();

//Middleware
app.use((req, res, next) => {
    console.log(`Request made for: ${req.url}`);
    next();
});

//Routes
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/blogs', (req, res) => {
    Blog.find({}).then((blogs) => res.render("index", {blogs}))
    .catch((err) => {
        console.log(err.message);
        res.redirect("/");
    });
});

//Start Server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});