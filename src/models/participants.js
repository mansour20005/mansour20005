const mongoose = require("mongoose");
const participantSchema = new mongoose.Schema ({
    Nom:{
        type : String,
        required : true,
    },
    Prenom:{
        type : String,
        required : true,
    },
    Adresse:{
        type : String,
        require : true,
        uppercase : true,
    },
    Email:{
        type : String,
        required : true,
    },
    Tel:{
        type : Number,
        required : true,
    },
    cours:[{
        type:mongoose.Types.ObjectId,
    }]
});

const participantModel = mongoose.model("Participant", participantSchema); 
module.exports = participantModel;