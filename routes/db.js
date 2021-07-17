// Express
const express = require("express")
const router = express.Router()

// Database
let data = require("../public/data/db")

// HTTP Methods START //

// Get All Data
router.get("/", (req, res) => {
  res.json(data)
})

// Get Data
router.get("/:id", (req, res) => {
  const { id } = req.params
  const getData = data.find((subject) => subject.id === Number(id))
  res.json(getData)
})

// Post Data
router.post("/", (req, res) => {
  const { id, subject, quota } = req.body
  // Increment ID
  const lengthData = data.length
  const newId = lengthData + 1

  // New Subject
  const newSubject = {
    id: newId,
    subject,
    quota,
  }
  data.push(newSubject)
  res.json(data)
})

// Put Data
router.put("/:id", (req, res) => {
  const { id, subject, quota } = req.body
  const getData = data.find((subject) => subject.id === Number(id))
  if (getData) {
    for (let i = 0; i < data.length; i++) {
      const thatSubject = data[i]
      if (thatSubject.id === Number(id)) {
        thatSubject.id = Number(id)
        thatSubject.subject = subject
        thatSubject.quota = quota
      }
    }
    res.json({
      status: {
        code: 200,
        success: true,
      },
      errorCode: 0,
      errorMsg: "",
    })
  } else {
    res.json({
      status: {
        code: 404,
        success: false,
      },
      errorCode: 01,
      errorMsg: "no data found in database",
    })
  }
})
// Patch Data
router.patch("/:id", (req, res) => {
  const { id, subject, quota } = req.body
  const getData = data.find((subject) => subject.id === Number(id))
  if (getData) {
    const newData = {
      ...getData,
      id: id || getData.id,
      subject: subject || getData.subject,
      quota: quota || getData.quota,
    }
    data.map((sub) => (sub.id === id ? newData : sub))
    res.json({
      status: {
        code: 200,
        success: true,
      },
      errorCode: 0,
      errorMsg: "",
    })
  } else {
    res.json({
      status: {
        code: 404,
        success: false,
      },
      errorCode: 01,
      errorMsg: "no data found in database",
    })
  }
})

// Delete Data
router.delete("/:id", (req, res) => {
  const { id } = req.params
  const getData = data.find((subject) => subject.id === Number(id))
  if (getData) {
    data = data.filter((subject) => subject.id !== Number(id))
    res.json({
      status: {
        code: 200,
        success: true,
      },
      errorCode: 0,
      errorMsg: "",
    })
  } else {
    res.json({
      status: {
        code: 404,
        success: false,
      },
      errorCode: 01,
      errorMsg: "no data found in database",
    })
  }
})

// HTTP Methods END //

// Module Exports
module.exports = router
