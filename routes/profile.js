const express = require("express")
const route = express.Router()
const db = require("../db")

console.log( process.env.DB_USER)
//sudah menangani bagian profile dalam file controller jadi tidak perlu disebutkan ulang
route.get("/",async (req,res) => {
    try { 
    const profiles = await db.query("select * from profiles")
    // console.log(profiles)
    res.render("./profile/home", {
        profiles
    })
    } catch (error) {
        res.status(500).send(error)
    }
})
// handling error

route.get("/all", (req,res) => {
    res.send("Ini Halaman semua profil")
})

route.get("/:nama",async (req,res) => {
    // res.send("Haii "+ req.params.nama)
try {
    const username = req.params.nama
    const data = await db.query("select * from profiles where username = ?",[username])
    console.log(data)

    if(data.length === 0){
        res.send('tidak ada user '+ username)
    }

    res.render("./profile/single", {
        username,
        data : data[0]
    })
} catch (error) {
    res.send("tidak ada prifile dengan username tersebut")
    
}
})

module.exports = route