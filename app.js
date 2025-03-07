const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs");

app.get('/' , (req , res) => {
    res.render("Home");
})

app.get('/About' , (req , res) => {
    res.render("About");
})

app.get('/News' , (req , res) => {
    res.render("News");
})

app.get('/Gallery' , (req , res) => {
    res.render("Gallery");
})

app.get('/Contact' , (req , res) => {
    res.render("Contact");
})


app.listen(3000 , function(){
    console.log("Its Running");
})