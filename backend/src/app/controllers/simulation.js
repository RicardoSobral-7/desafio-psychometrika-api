const register = require("../models/register");
const consult = require("../models/consult");
module.exports = {
    async question1(req, res) {
        const id = req.userId;
        const answer = req.body.question1;

        const registerAnswer = await register.registerQuestion1(id, answer);

        res.status(200).json({ user: id, registredAnswer: registerAnswer });
    },
    async question2(req, res) {
        const id = req.userId;
        const answer = req.body.question2;

        const registerAnswer = await register.registerQuestion2(id, answer);

        res.status(200).json({ user: id, registredAnswer: registerAnswer });
    },
    async question3(req, res) {
        const id = req.userId;
        const answer = req.body.question3;

        const registerAnswer = await register.registerQuestion3(id, answer);

        res.status(200).json({ user: id, registredAnswer: registerAnswer });
    },
    async question4(req, res) {
        const id = req.userId;
        const answer = req.body.question4;

        const registerAnswer = await register.registerQuestion4(id, answer);

        res.status(200).json({ user: id, registredAnswer: registerAnswer });
    },
    async index(req, res) {
        const id = req.userId;
        const questions = await consult.gabarito(id);

        res.status(200).json({ user: id, questions });
    },
    async ranking(req, res) {
        const ranking = await consult.ranking();
        res.status(200).json({ranking});
    },
    async show(req, res) {
        const {id} = req.params;
        const information = await consult.individualEvidence(id);
        res.status(200).json({information});
    }


}