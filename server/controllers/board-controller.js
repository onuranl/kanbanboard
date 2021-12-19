const board_service = require("../services/board-service");

async function get(req, res) {
  try {
    const result = await board_service.get();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getByID(req, res) {
  try {
    const result = await board_service.getByID(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { backlogs,
    todos,
    progress,
    designed } = req.body;

  const payload = {
    backlogs,
    todos,
    progress,
    designed
  };

  try {
    const result = await board_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function update(req, res) {
  const { backlogs,
    todos,
    progress,
    designed } = req.body;

  const payload = {
    backlogs,
    todos,
    progress,
    designed
  };

  try {
    const result = await board_service.update(req.params.id, payload);

    return res.status(200).json("Successfully updated");
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = {
  get,
  getByID,
  create,
  update
};