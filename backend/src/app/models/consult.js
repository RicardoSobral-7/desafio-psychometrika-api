const User = require("../../database/schema/User");
module.exports = {
    async gabarito(id) {
        try {
            let questions = await User.findById(id);

            const { question1, question2, question3, question4 } = questions

            return { question1, question2, question3, question4 }
        } catch (error) {
            return { error: `Consult error ${error}` }
        }
    },
    async ranking() {
        try {
            const ranking = await User.find({}).sort({ corrects: 'descending' })
            return ranking;
        } catch (error) {
            return { error: `Error to consult ranking ${error}` }
        }
    },
    async individualEvidence(id) {
        try {
            const individualEvidence = await User.findById(id);
            return individualEvidence;
        } catch (error) {
            return { error: `Can't get information ${error}` }
        }
    }
}