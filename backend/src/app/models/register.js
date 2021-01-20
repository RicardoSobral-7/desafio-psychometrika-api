const User = require("../../database/schema/User");
module.exports = {
    async registerQuestion1(id, answer) {
        const query = { _id: id };
        const update = {
            "$set": {
                question1: answer,
            }
        };
        try {
            if(answer == "b"){
                let correctQuestions =  await User.findOne(query);
                const correct  = Number(correctQuestions.corrects + 1);
                await User.findOneAndUpdate(query, {"$set": {corrects: correct}});
                
            } else {
                let incorrectQuestions = await User.findOne(query);
                const incorrect = Number(incorrectQuestions.incorrects + 1);
                await User.findOneAndUpdate(query, {"$set": {incorrects: incorrect}});
                
            }

            let user = User.findOneAndUpdate(query, update).then((data) => {
                return {"Succed": `Data saved ${data}`};
            }).catch((error) => {
                return { "Error": `${error}` };
            })
            return user;

        } catch (error) {
            return { "Error": `${error}` };
        }
    },
    async registerQuestion2(id, answer) {
        const query = { _id: id };
        const update = {
            "$set": {
                question2: answer,
            }
        };
        try {
            if(answer == "c"){
                let correctQuestions =  await User.findOne(query);
                const correct  = Number(correctQuestions.corrects + 1);
                await User.findOneAndUpdate(query, {"$set": {corrects: correct}});
                
            } else {
                let incorrectQuestions = await User.findOne(query);
                const incorrect = Number(incorrectQuestions.incorrects + 1);
                await User.findOneAndUpdate(query, {"$set": {incorrects: incorrect}});
                
            }
            let user = User.findOneAndUpdate(query, update).then((data) => {
                return {"Succed": `Data saved ${data}`}
            }).catch((error) => {
                return { "Error": `${error}` };
            });
            return user;
        } catch (error) {
            return { "Error": `${error}` };
        }
    },
    async registerQuestion3(id, answer) {
        const query = { _id: id };
        const update = {
            "$set": {
                question3: answer,
            }
        };
        try {
            if(answer == "d"){
                let correctQuestions =  await User.findOne(query);
                const correct  = Number(correctQuestions.corrects + 1);
                await User.findOneAndUpdate(query, {"$set": {corrects: correct}});
                
            } else {
                let incorrectQuestions = await User.findOne(query);
                const incorrect = Number(incorrectQuestions.incorrects + 1);
                await User.findOneAndUpdate(query, {"$set": {incorrects: incorrect}});
                
            }
            let user = User.findOneAndUpdate(query, update).then((data) => {
                return {Succed: `Data saved ${data}`}
            }).catch((error) => {
                return { Error: `${error}` };
            })
            return user;

        } catch (error) {
            return { Error: `${error}` };
        }
    },
    async registerQuestion4(id, answer) {
        const query = { _id: id };
        const update = {
            "$set": {
                question4: answer,
            }
        };
        try {
            if(answer == "e"){
                let correctQuestions =  await User.findOne(query);
                const correct  = Number(correctQuestions.corrects + 1);
                await User.findOneAndUpdate(query, {"$set": {corrects: correct}});
                
            } else {
                let incorrectQuestions = await User.findOne(query);
                const incorrect = Number(incorrectQuestions.incorrects + 1);
                await User.findOneAndUpdate(query, {"$set": {incorrects: incorrect}});
                
            }

            let user = User.findOneAndUpdate(query, update).then((data) => {
                return {Succed: `Data saved ${data}`}
            }).catch((error) => {
                return { Error: `${error}` };
            })
            return user;

        } catch (error) {
            return { Error: `${error}` };
        }
    }
    
}