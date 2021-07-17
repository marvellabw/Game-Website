// Express
const express = require("express")
const router = express.Router()

// Routing
router.get("/", (req, res) => {
  res.status(200)
  res.render("../views/home")
})

// Module Exports
module.exports = router
