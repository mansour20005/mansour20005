const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema ({
    Titre:{
        type : String,
        required : true,
    },
    Description:{
        type : String,
        required : true,
    },
    Volume_horaire:{
        type : Number,
        required : true,
        uppercase : true,
    },
    Tel:{
        type : Number,
        required : true,
        default : 770000000,
    },

});

const courseModel = mongoose.model("courses", courseSchema); 
module.exports = courseModel;