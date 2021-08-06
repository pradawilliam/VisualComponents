const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.use(express.static(__dirname + '/front-end/modules'))

app.listen(port, () => {
    console.info(`Server running in --> http://localhost:${port}`)
})