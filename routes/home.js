const express = require("express")
const route = express.Router()

route.get("/", (req,res) => {
    res.send("Yip Yip")
})

module.exports = route