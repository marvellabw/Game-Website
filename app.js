// Express, Morgan, Path, Port
const express = require("express")
const app = express()
const morgan = require("morgan")
const path = require("path")
const port = 3000

// Files
const home = require("./routes/home")
const login = require("./routes/login")
const rps = require("./routes/rps")
const db = require("./routes/db")

// Logger
morgan("tiny")

// View Engine
app.set("view engine", "ejs")

// Application Level Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "/public")))

// Routes
app.use("/", home)
app.use("/login", login)
app.use("/rps", rps)
app.use("/database", db)

// Listening Port
app.listen(port, () => {
  // console.log(`Listening at port ${port}`)
})
