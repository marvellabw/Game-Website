// Express
const express = require("express")
const router = express.Router()

// Routing
router.get("/", (req, res) => {
  res.status(200)
  res.render("../views/login")
})

router.post("/", (req, res) => {
  const { username = "", password = "" } = req.body
  if (!username || !password) {
    res.status(405)
    res.render("../views/error")
  }
  res.redirect("/rps")
})

// Module Exports
module.exports = router
