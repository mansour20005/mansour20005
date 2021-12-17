const mongoose = require("mongoose");
const courses = require ("../models/course");
// const bodyParser = require('body-parser');


// METHODE GET /coursess tous les coursess
const chercheCourses = async (req, res) => {
    try{
        const findcourses = await courses.find();
        res.json(findcourses);
    }
    catch(e){
        console.log(e.message)
    }
}
// METHODE GET /coursess par un id
const chercheCoursesById = async (req, res) => {
    const coursesId = req.params.id;
    try{
        const findcourses = await courses.findById({_id:coursesId});
        res.json(findcourses);
    }
    catch(e){
        console.log(e.message)
    }
}
// METHODE POST UN courses
const postCourses = async (req, res) => {
    const addcourses = req.body;
    try{
        const my_part = await courses.create(addcourses);
        res.status(200).send(my_part);
    }
    catch(e){
        console.log(e.message);
    }
};
// METHODE DELETE UN courses PARS SON ID
const supprimeCoursesById = async (req, res) => {
    const coursesId = req.params.id;
    try{
        const deletecourses = await courses.remove({_id:coursesId});
        res.json(deletecourses);
    }
    catch(e){
        console.log(e.message)
    }
}
// METHODE METTRE A JOUR UN courses PARS SON ID
const upDateCoursesById = async (req, res) => {
    const coursesId = req.params.id;
    const patchcoursesbody = req.body;
    try{
        const deletecourses = await courses.findOneAndUpdate({_id:coursesId}, {$set:patchcoursesbody});
        res.json(deletecourses);
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {

    chercheCourses,
    chercheCoursesById,
    postCourses,
    supprimeCoursesById,
    upDateCoursesById,

}