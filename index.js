const express = require("express");
const app = express();

const stellRouter = require("./route.js"); 
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose")

app.use(express.json());

app.use(cors());

app.use("/stell", stellRouter);


app.get("/", (req, res) =>{
    res.send("Test API");
});

//const PORT = process.env.PORT;
const PORT = 5003;

// mongoose.connect(process.env.MONGO_URL)
mongoose.connect("mongodb://127.0.0.1/stellDB")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})