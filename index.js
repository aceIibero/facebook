require('dotenv').config();
const express = require("express")
const app = express()
const homeRoute = require("./routes/home")
const profileRoute = require("./routes/profile")
const salamRoute = require("./routes/salam")
const morgan = require("morgan")

//config env
const db = require("./db")
console.log( process.env.DB_USER)
// console.log(process.env.DB_USER)

app.use(express.static("public"))
//set akses folder public
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views")
//set ejs

app.use(morgan('combined'));

app.use("/", homeRoute)
app.use("/profile", profileRoute)
app.use("/salam", salamRoute)

app.listen(5555,() => 
    console.log("aplikasi berjalan di port 5555 !")
)