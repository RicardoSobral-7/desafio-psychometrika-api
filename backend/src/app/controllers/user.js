const { validateEmail } = require("../../libs/utils");
const User = require("../models/User");
const { generateToken } = require("../middlewares/signin");

module.exports = {
    async checkUser(req, res) {
        try {
            const { name, email } = req.body;
            const validEmail = await validateEmail(email);
            if (validEmail !== "Email invalido") {
                let result = await User.findUser(name, validEmail);
                if (result == null) {
                    const data = await User.create(name, email);
                    res.status(201).json({ token: generateToken({ id: data.id }) });
                } else {
                    res.status(200).json({ token: generateToken({ id: result.id }) });
                }
            }
        } catch (error) {
            res.status(500).json({ messege: `Email invalido ${error}` });
        }
    }
}