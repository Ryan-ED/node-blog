//Require Modules
const express = require("express");
const app = express();

//App config
app.set('view engine', 'ejs');
app.use((req, res, next) => {
    console.log(`Request made for: ${req.url}`);
    next();
});

//Routes
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/blogs', (req, res) => {
    res.render("index");
});

//Start Server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});