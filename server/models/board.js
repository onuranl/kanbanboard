const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    color: {type: String, required: true},
},{ timestamps: true })

const BoardSchema = new mongoose.Schema(
  {
    backlogs: [CardSchema],
    todos: [CardSchema],
    progress: [CardSchema],
    designed: [CardSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("boards", BoardSchema);