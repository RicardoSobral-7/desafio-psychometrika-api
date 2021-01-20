const User = require("../../database/schema/User");
module.exports = {
    async gabarito(id) {
        try {
            let questions = await User.findById(id);
            const { question1, question2, question3, question4 } = questions
            const array = [question1, question2, question3, question4]

            if (question1 !== "" && question2 !== "" && question3 !== "" && question4 !== "") {
                return { question1, question2, question3, question4 }
            } else {
                return { question1, question2, question3, question4 }
            }
        } catch (error) {
            return { "error": `Consult error ${error}` }
        }
    },
    async ranking() {
        try {
            const ranking = await User.find({}).sort({ corrects: 'descending' })
            return ranking;
        } catch (error) {
            return { "Ranking error": `Error to consult ranking ${error}` }
        }
    },
    async individualEvidence(id) {
        try {
            const individualEvidence = await User.findById(id);
            return individualEvidence;
        } catch (error) {
            return {"Individual show error": `Can't get information ${error}`}
        }
    }, 
    async findUser(name, email) {
        const user = await User.findOne({ name, email});
        return user;
    }   
}