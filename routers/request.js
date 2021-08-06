const express = require("express")
const {request} = require("../client/request")

const router = express.Router()

router.post("/request", request)

module.exports = router
