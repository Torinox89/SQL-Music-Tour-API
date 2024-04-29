//Dependencies
const stages = require ('express').Router()
const db = require('../models')
const {Stage} = db

//Find All Stages
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Find a Specific Stage
stages.get('/:name', async(req,res)=>{
    try {
        const foundStage= await Stage.findOne({
            where: {stage_name:req.params.name}
        })
        res.status(200).json(foundStage)

    } catch (error) {
        res.status(500).json(error)
    }
})

//Create a Stage
stages.post('/', async(req,res)=>{
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stage',
            data: newStage
        })
    } catch (error){
        res.status(500).json(err)
    }
})
//Update a Stage
stages.put('./:id',async(req,res)=>{
    try {
        const updatedStages= await Stage.update(req.body, 
            {where: {stage_id: req.params.id}})
        res.status(200).json({
            message: `Successfully Updated ${updatedStages} Stage(s)`
            })    
    } catch (error) {
            res.stau(500).json(err)
    }
})

// Delete a Stage
stages.delete ('/', async (req,res)=>{
    try {
        const deleteStages = await Stage.destroy({
            where: {stage_id:req.params.id}
        })
        res.status(200).json({
            message: `Successfule Deleted the Stages ${deleteStages}`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})
//Export
module.exports=stages