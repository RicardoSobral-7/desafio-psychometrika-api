const User = require("../../database/schema/User");
module.exports = {
    async create(name, email) {
        try {
            let user = new User({ name, email });
            user.save().then((result) => {
                return result;
            }).catch((error) => {
                return {Error : `Houve um erro ao cadastrar usuário ${error}`}
            })
            return user;
        } catch (error) {
            return {Error : `Internal error ${error}`}
        }
    }
}