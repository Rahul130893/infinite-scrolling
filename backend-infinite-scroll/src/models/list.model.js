const mongoose = require("mongoose")

const ListSchema = mongoose.Schema({
    user:{type: String, required:true}
})

const List = mongoose.model("list", ListSchema)

module.exports = List