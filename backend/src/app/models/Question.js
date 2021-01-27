const Questions = require("../../database/schema/Question");
const User = require("../../database/schema/User");
 
module.exports = {
    async create(data) {
        try {
            const { theme, enunciation, matrix, tables, pre_alternatives, alternative_letter, alternative_body, correctAnswer } = data
            await Questions.create({ theme, enunciation, matrix, tables, pre_alternatives, alternative_letter, alternative_body, correctAnswer });
        } catch (error) {
            return { Error: `Internal error ${error}` }
        }
    },
    async findQuestion(id) {
        try {
            const data = await Questions.findById({ _id: id });
            return data;
        } catch (error) {
            return { messege: `Cannot find requested question! ${error}` }
        }
    },
    async findAllQuestionsIds() {
        try {
            const questions = await Questions.find({});
            const ids = questions.map((question) => {
                return question._id
            });
            return ids;

        } catch (error) {
            return { messege: `Something are wrong with database! ${error}` }
        }
    },
    async correctAnswers() {
        try {
            const questions = await Questions.find({});
            const correctAnswers = questions.map((question) => {
                return question.correctAnswer
            });
            return correctAnswers;
        } catch (error) {
            return { messege: `Something are wrong with database! ${error}` }
        }
    },
    async registerAnswers(id, answers, questions) {
        try {
            const questionsIds = await this.findAllQuestionsIds();
            const query = { _id: id };
            await User.findOneAndUpdate(query, { questions_id: questionsIds })
            await User.findOneAndUpdate(query, { questions_answers: answers });

            for (let i = 0; i < questions.length; i++) {
                if (answers[i] === questions[i]) {
                    let correctQuestions = await User.findOne(query);
                    const correct = Number(correctQuestions.corrects + 1);
                    await User.findOneAndUpdate(query, { corrects: correct });
                } else {
                    let incorrectQuestions = await User.findOne(query);
                    const incorrect = Number(incorrectQuestions.incorrects + 1);
                    await User.findOneAndUpdate(query, { incorrects: incorrect });
                }
            }
        } catch (error) {
            return { messege: `Something are wrong with database! ${error}` }
        }
    },
}