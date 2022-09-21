const express = require('express');
const Todo = require("./models/todo");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect("mongodb://localhost/todos");

const app = express();
app.use(bodyparser());
app.use(express.static("./view"));
app.set("views","./view");
app.set("view engine","ejs");
app.get("/",async (req,res)=>{
    //fetch all todos from database
    let todos = await Todo.find();
    res.render("index.ejs",{todos});
});
app.post("/todo/add",async (req,res)=>{
    //create todo in database
    await Todo.create({name: req.body.todo})
    res.redirect("/")
});
app.post("/todo/update/:id",async (req,res)=>{
    //create todo
    //console.log(req.params.id);
    await Todo.updateOne({_id:req.params.id},{status:true})
    res.redirect("/")
});
app.post("/todo/delete/:id",async (req,res)=>{
    //create todo
    //console.log(req.params.id);
    await Todo.deleteOne({_id:req.params.id})
    res.redirect("/")
});
app.listen(3000,()=>{console.log("server is up at port 3000");})