const express = require("express")
const route = express.Router()

//sudah menangani bagian profile dalam file controller jadi tidak perlu disebutkan ulang
route.get("/", (rSeq,res) => {
    res.send("Ini Profile gan !!")
})

route.get("/all", (req,res) => {
    res.send("Ini Halaman semua profil")
})

route.get("/:nama", (req,res) => {
    // res.send("Haii "+ req.params.nama)
    const nama = req.params.nama
    res.render("./profile", {
        name : nama
    })
})

module.exports = route