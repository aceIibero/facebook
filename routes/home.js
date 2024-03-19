const express = require("express")
const route = express.Router()

route.get("/", (req,res) => {
    res.send("Yip Yip")
})

route.get("/profil", (req,res) => {
    res.send("Ini Profile gan !!")
})

route.get("/profil/:nama", (req,res) => {
    res.send("Haii "+ req.params.nama)
})

module.exports = route