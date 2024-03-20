const express = require("express")
const route = express.Router()
const db = require("../db")

//sudah menangani bagian profile dalam file controller jadi tidak perlu disebutkan ulang
route.get("/",async (req,res) => {
    const profiles = await db.query("select * from profiles")
    // console.log(profiles)
    res.render("./profile/home", {
        profiles
    })
})

route.get("/all", (req,res) => {
    res.send("Ini Halaman semua profil")
})

route.get("/:nama",async (req,res) => {
    // res.send("Haii "+ req.params.nama)
    const username = req.params.nama
    const data = await db.query("select * from profiles where username = ?",[username])
    console.log(data)
    res.render("./profile/single", {
        username,
        data : data[0]
    })
})

module.exports = route