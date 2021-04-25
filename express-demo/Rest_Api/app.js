const lodash = require('lodash');
const Joi = require('joi');
require("./conn");
const PendingExport = require("./models/document")
const express = require('express');
const app = express();
app.use(express.json());


app.post("/documents",async(req,res) => {
    try{
        const document = new PendingExport (req.body);
        const createDocument = await document.save();
        res.send(createDocument);
    }
    catch(err){
        res.send(err);
    }
 });

 app.get("/documents",async(req,res) => {
    try{
        const allDocuments = await PendingExport.find();
        res.send(allDocuments);
    }
    catch(err){
        res.send(err);
    }
 });


 app.get("/documents/:id",async(req,res) => {
    try{
        const document = await PendingExport.findById(req.params.id);
        if(document != null)
        {
            res.send(document);
        }
        
    }
    catch(err){
        res.send(err);
    }
 });


 app.delete("/documents/:id",async(req,res) => {
    try{
        const document = await PendingExport.findByIdAndDelete(req.params.id);
        res.send(document);
    }
    catch(err){
        res.send(err);
    }
 });


 app.patch("/documents/:id",async(req,res) => {
    try{
        const document = await PendingExport.findByIdAndUpdate(req.params.id,req.body);
        res.send(document);
    }
    catch(err){
        res.send(err);
    }
 });










    app.listen(3000, () => console.log('listening on port 3000'));