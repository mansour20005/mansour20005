const participantsServices = require('./src/services/paticipantsServices');
const coursesServices = require('./src/services/coursesServices');

const bodyParser = require('body-parser');

const express = require('express');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended : false}));

// route.use(bodyParser.json());

route.get('/',async (req,res)=>{
    console.log('bienvenue dans notre site');
    res.end;
});

// VOICI LES METHDE GET POUR LES PARTICIPANTS
// METHODE GET /participants 
route.get('/participants', async(req,res)=>{
    const participant = await participantsServices.chercheParticipant(req,res);
});
// METHODE GET /participants par un id 
route.get('/participants/:id', async(req,res)=>{
        const participant = await participantsServices.chercheParticipantById(req,res);
});
// METHODE Post /participants 
route.post('/participants', async(req,res)=>{
    const participant = await participantsServices.postParticipant(req,res);
});
// METHODE delele /participants par un id
route.delete('/participants/:id', async(req,res)=>{
    const participant = await participantsServices.supprimeParticipantById(req,res);
});
// METHODE update /participants par un id 
route.patch('/participants/:id', async(req,res)=>{
    const participant = await participantsServices.upDateParticipantById(req,res);
});


// VOICI LES METHDE GET POUR LES COURS
// METHODE GET /COURSES 
route.get('/courses', async(req,res)=>{
    const cours = await coursesServices.chercheCourses(req,res);
});
// METHODE GET /COURSES par un id 
route.get('/courses/:id', async(req,res)=>{
        const cours = await coursesServices.chercheCoursesById(req,res);
});
// METHODE Post /COURSES 
route.post('/courses', async(req,res)=>{
    const cours = await coursesServices.postCourses(req,res);
});
// METHODE delele /COURSES par un id
route.delete('/courses/:id', async(req,res)=>{
    const cours = await coursesServices.supprimeCoursesById(req,res);
});
// METHODE update /COURSES par un id 
route.patch('/courses/:id', async(req,res)=>{
    const cours = await coursesServices.upDateCoursesById(req,res);
});

module.exports = route;