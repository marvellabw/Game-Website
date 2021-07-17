// Express
const express = require("express")
const router = express.Router()

// Routing
router.get("/", (req, res) => {
  res.status(200)
  res.render("../views/rps")
})

// Module Exports
module.exports = router
