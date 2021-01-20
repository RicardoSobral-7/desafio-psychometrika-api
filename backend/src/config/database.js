const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/simulation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
    useFindAndModify: false 
});

module.exports = mongoose;