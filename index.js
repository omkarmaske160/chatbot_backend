const express = require("express")
const { v4: uuid } = require("uuid")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const { default: mongoose } = require("mongoose")

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URL)

//routes goes here


app.use("*", (req, res) => {
    res.status(400).json({
        message: "response not found"
    })
})

//monogo db connection
mongoose.connection.once("open", () => {
    console.log("DATABASE CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER CONNECTED")
    )
})
