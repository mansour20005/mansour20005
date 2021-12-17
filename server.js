(async()=>{
    const mongoose = require("mongoose");
    const express = require('express');
    const mainRouter=require('./app');
    
   
    const connecter = async() => {
        try{
            await mongoose.connect('mongodb://localhost:27017/bootcamp');    
            console.log("connexion bien reussi");
        }
        catch(e){
            console.log(e.message);
        }            
    }
    await connecter();

    const app = express();
    app.use('/',mainRouter);


    app.listen(3000,()=>{
         console.log('listenning on port 3000');
    });
}) ();



