const express = require("express");
const routes = express.Router();
const userController = require("./app/controllers/user");
const simulationController = require("./app/controllers/simulation");
const authMiddleware = require("./app/middlewares/auth");
const questionController = require('./app/controllers/question');

routes.post("/api/signin", userController.checkUser);

routes.get('/api/question/all', questionController.findAllQuestions);
routes.post('/api/question/create', questionController.create);

routes.use("/api/question/:id", authMiddleware.auth);
routes.get('/api/question/:id', questionController.findOneQuestion);

routes.use("/api/question/answers", authMiddleware.auth);
routes.post('/api/question/answers', questionController.registerAnswers);


// routes.use("/api/prova/questao1", authMiddleware.auth);
// routes.post("/api/prova/questao1", simulationController.question1);

// routes.use("/api/prova/questao2", authMiddleware.auth);
// routes.post("/api/prova/questao2", simulationController.question2);

// routes.use("/api/prova/questao3", authMiddleware.auth);
// routes.post("/api/prova/questao3", simulationController.question3);

// routes.use("/api/prova/questao4", authMiddleware.auth);
// routes.post("/api/prova/questao4", simulationController.question4);

// routes.use("/api/prova/gabarito", authMiddleware.auth);
// routes.get("/api/prova/gabarito", simulationController.index);

routes.get("/api/ranking", simulationController.ranking);

routes.get("/api/evidence/:id", simulationController.show)

module.exports = routes;