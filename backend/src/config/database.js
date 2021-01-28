const mongoose = require("mongoose");

mongoose.connect("mongodb://simulado-mongodb:27017/simulation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
    useFindAndModify: false 
});

module.exports = mongoose;