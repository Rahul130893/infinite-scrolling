const { Router } = require("express")
const express = require("express")

const router = express.Router()

const List = require("../models/list.model")

router.post("/", async (req, res) => {
    try {
        const list = await List.create(req.body)
        return res.status(200).send({list:list})
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("", async (req, res) => {
    try {
       
        const list = await List.find().lean().exec()
        return res.status(200).send({list:list})
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports= router