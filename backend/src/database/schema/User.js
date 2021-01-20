const mongoose = require("../../config/database");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    questions_id: [String],
    questions_answers: [String],
    corrects: { type: Number, default: 0 },
    incorrects: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", userSchema);

