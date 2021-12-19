const generate_routes = require("./generate_routes");

const board_controller = require("../controllers/board-controller");

const routes = [{
    path: "/board",
    children: [
      {
        path: "/",
        handler: board_controller.get,
        method: "get",
      },
      {
        path: "/:id",
        handler: board_controller.getByID,
        method: "get",
      },
      {
        path: "/",
        handler: board_controller.create,
        method: "post",
      },
      {
        path: "/:id",
        handler: board_controller.update,
        method: "put",
      },
    ],
}]

module.exports = generate_routes(routes);