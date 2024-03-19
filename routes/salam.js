const express = require("express")
const route = express.Router()

//sudah menangani bagian profile dalam file controller jadi tidak perlu disebutkan ulang
route.get("/", (req,res) => {
    res.send("salam")
})

route.get("/:kondisi", (req,res) => {
    const kondisi = req.params.kondisi
    
    let hasil = "ya apa ??"

    if (kondisi == "siang") {
        hasil = "aduh panas"
      } else if (kondisi == "malam"){
        hasil = "dinginnya"
      } else if (kondisi == "sore"){
        hasil = "chil gans"
      }

    res.send(hasil)
})

module.exports = route