const mongoose = require("mongoose");
const Participant = require ("../models/participants");

const bodyParser = require('body-parser');


// METHODE GET /participants tous les participants
const chercheParticipant = async (req, res) => {
    try{
        const findParticipant = await Participant.find();
        res.json(findParticipant);
    }
    catch(e){
        console.log(e.message)
    }
}
// METHODE GET /participants par un id
const chercheParticipantById = async (req, res) => {
    const participantId = req.params.id;
    try{
        const findParticipant = await Participant.findById({_id:participantId});
        res.json(findParticipant);
    }
    catch(e){
        console.log(e.message)
    }
}
// METHODE POST UN PARTICIPANT
const postParticipant = async (req, res) => {
    const addParticipant = req.body;
    try{
        const my_part = await Participant.create(addParticipant);
        res.status(200).send(my_part);
    }
    catch(e){
        console.log(e.message);
    }
};
// METHODE DELETE UN PARTICIPANT PARS SON ID
const supprimeParticipantById = async (req, res) => {
    const participantId = req.params.id;
    try{
        const deleteParticipant = await Participant.remove({_id:participantId});
        res.json(deleteParticipant);
    }
    catch(e){
        console.log(e.message)
    }
}
// METHODE METTRE A JOUR UN PARTICIPANT PARS SON ID
const upDateParticipantById = async (req, res) => {
    const participantId = req.params.id;
    const patchParticipantbody = req.body;
    try{
        const deleteParticipant = await Participant.findOneAndUpdate({_id:participantId}, {$set:patchParticipantbody});
        res.json(deleteParticipant);
    }
    catch(e){
        console.log(e.message)
    }
}

const affichageNomVh = async (req, res) => {
    try{
        const findParticipants = await Participant.find();
        const findCourses = await courses.find();
        findParticipants.forEach(function(etudiant){
            console.log(etudiant);
            idcours=etudiant.cours;
            //console.log(idcours);
            var vHoraire=0;
            var i=0;
            idcours.forEach(function(id){
                var myId=JSON.stringify(id);
                findCourses.forEach(function(cours){
                    var testId=JSON.stringify(cours._id);
                    if(testId===myId){
                        i=++i;
                        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
                        console.log('voici le cours numéro :', i);
                        console.log('--------------------------');
                        console.log('Titre cours:',cours.Titre);
                        console.log('Volume_horaire :',cours.Volume_horaire);
                        vhTemp=cours.Volume_horaire;
                        vHoraire=vHoraire+vhTemp;
                    };
                });
            });
            console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            console.log('Volume horaire Total :', vHoraire);     
        });
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {

    chercheParticipant,
    chercheParticipantById,
    postParticipant,
    supprimeParticipantById,
    upDateParticipantById,

}