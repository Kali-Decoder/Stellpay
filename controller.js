const upiModel = require("./model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const SECRET_KEY = process.env.SECRET_KEY;
//const SECRET_KEY = "NOTES_API";
// const fetch = require('node-fetch');

async function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const getToken = async (req, res) =>{
    try {
        
        const notes = await makeid(16);
        res.status(200).json(notes);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}
// const getall = async (req, res) =>{
//     try {
        
//         const notes = await upiModel.find({});
//         res.status(200).json(notes);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Something went wrong"});
//     }
// }

module.exports = {
    getToken
}