const board_model = require("../models/board");

async function get() {
  return await board_model.find({});
}

async function getByID(id) {
  return await board_model.findById({ _id: id});
}

async function create(board) {
  return await board_model.create(board);
}

async function update(id, board) {
  return await board_model.findOneAndUpdate({ _id: id }, board);
}

module.exports = { get, getByID, create, update };