const express = require("express")

const connect = require("./config/db")

const app = express()

app.use(express.json())

app.listen(5500, async () => {
    try {
        await connect()
        console.log("listenig at port 5500")
    } catch (error) {
        console.log(error)
    }
})