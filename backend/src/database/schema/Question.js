const mongoose = require("../../config/database");

const questionSchema = new mongoose.Schema({
    theme: { type: String, required: true },  
    enunciation: { type: String, required: true },
    alternatives: [String],
    correctAnswer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("question", questionSchema);

