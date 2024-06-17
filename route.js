const express = require("express");
const {
    getToken
    } = require("./controller.js");
const stellRouter = express.Router();

stellRouter.get("/gettoken" ,getToken);


module.exports = stellRouter;