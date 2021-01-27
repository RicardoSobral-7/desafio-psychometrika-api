const mongoose = require("../../config/database");

const questionSchema = new mongoose.Schema({
    theme: { type: String, required: true },  
    enunciation: { type: String, required: true },
    matrix: [String],
    tables: [String],
    pre_alternatives: { type: String },
    alternative_letter: [String],
    alternative_body: [String],
    correctAnswer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("question", questionSchema);

