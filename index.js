const express = require("express")
const app = express()
const homeRoute = require("./routes/home")

app.use("/", homeRoute)

app.listen(5555,() => 
    console.log("aplikasi berjalan di port 5555 !")
)