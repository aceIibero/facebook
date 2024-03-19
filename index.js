const express = require("express")
const app = express()

app.get("/",(req,res) => {
    res.send("Diterima")
})

app.listen(5555,() => 
    console.log("aplikasi berjalan di port 5555 !")
)