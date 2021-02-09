const { Router } = require("express");
const ExampleController = require("../../../../presentation/controller/Example.controller");
const authMiddleware = require('../../../middlewares/apikey');

const routes = new Router();

routes.post("/example", ExampleController.store);
routes.get("/example", authMiddleware, ExampleController.get);

module.exports = routes;
