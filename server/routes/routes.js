const express = require('express');

const router = express.Router();

const Model = require('../models/model');

//POST METHOD
router.post('/post', async (req, res) => {
    const data = new Model(JSON.parse(Object.keys(req.body)[0]));

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//GET_ALL METHOD
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//GET_ALL_CATEGORY
router.get('/getCategories', async(req,res)=>{
    try{
        const data = await Model.find();
        let categoryDict = {};
        data.forEach((food)=>{
            if(categoryDict[food.category] === undefined){
                categoryDict[food.category] = [];
            }
            categoryDict[food.category].push([food.name,food.price,food.description === undefined? "" : food.description,food._id]);
        });
        res.json(categoryDict);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//GET_BY_ID METHOD
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//UPDATE_BY_ID METHOD
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = JSON.parse(Object.keys(req.body)[0]);
        
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        );

        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//DELETE_BY_ID METHOD
router.delete('/delete/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const data =  await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted...`)
    }catch(error){
        res.status(400).json({message: error.message});
    }
});


module.exports = router;