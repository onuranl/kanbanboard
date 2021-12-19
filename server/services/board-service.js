const board_repository = require("../repositories/board-repository");

async function get() {
  return await board_repository.get();
}

async function getByID(id) {
  return await board_repository.getByID(id);
}

async function create(board) {
  return await board_repository.create(board);
}

async function update(id, board) {
  return await board_repository.update(id, board);
}

module.exports = { get, getByID, create, update };