const express = require("express")

const connect = require("./config/db")


const listController = require("./controllers/list.controller")
const app = express()

app.use(express.json())

app.use("/list", listController)

 

app.listen(6000, async () => {
    try {
        await connect()
        console.log("listenig at port 6000")
    } catch (error) {
        console.log(error)
    }
})