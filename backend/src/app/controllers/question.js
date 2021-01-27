const Question = require("../models/Question");
const katex = require('katex');

module.exports = {
    async create(req, res) {
        try {
            console.log(req.body)
            await Question.create(req.body);
            res.status(201).json();

        } catch (error) {
            res.status(500).json({ error: `Internal server ${error}` });
        }
    },
    async findOneQuestion(req, res) {
        try {
            if (req.params.id) {
                const { id } = req.params;
                const data = await Question.findQuestion(id);
                res.status(200).json(data);
            } else {
                res.status(400).json({ messege: "You need pass an id at URL: /api/question/requested question id" })
            }
        } catch (error) {
            res.status(500).json({ error: `Internal server ${error}` });

        }
    },
    async findAllQuestions(req, res) {
        try {
            const data = await Question.findAllQuestionsIds();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: `Internal server error ${error}` })
        }
    },
    async registerAnswers(req, res) {
        try {
            const { answers } = req.body;
            const id = req.userId;
            const questionsCorrects = await Question.correctAnswers();
            await Question.registerAnswers(id, answers, questionsCorrects);
            res.status(200).end();
        } catch (error) {
            res.status(500).json({ error: `Internal server error ${error}` })
        }
    }
}