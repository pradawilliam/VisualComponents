const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const requestRouter = require("../routers/request")

app.use(express.json())
app.use(express.static(__dirname + '/front-end/modules'))

app.use("", requestRouter)

app.listen(port, () => {
    console.info(`Server running in --> http://localhost:${port}`)
})