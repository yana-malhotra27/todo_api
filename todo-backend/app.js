// Core Module


// External Module
const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");

//local
const todoItemsRouter = require("./routes/todoItemsRouter")
const errorsController=require("./controllers/errors")

const app = express();

const DB_PATH = "";

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

app.use("/api/todo",todoItemsRouter);

app.use(errorsController.pageNotFound);

PORT=3003;
mongoose.connect(DB_PATH).then(()=> {
    console.log("mongoose connected")
    app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    });
}).catch(err=>{
    console.log(err)
});