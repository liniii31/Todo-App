const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    name : String,
    status : {type:Boolean}
});
const todo = mongoose.model("Todo",todoSchema);
module.exports = todo;