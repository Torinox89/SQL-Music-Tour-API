//Dependencies
const bands = require ('express').Router()
const db = require('../models')
const {Band,Meet_greet,Event,Set_time} = db
const {Op} =require('sequelize')
const meet_greet = require('../models/meet_greet')

//Find All Bands
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({ 
            order: [ [ 'band_start_time', 'ASC' ] ] ,
            where :{ 
                band_name:{[Op.like]: `%${req.query.name?req.query.name: ''}`}
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Find a Specific Band
bands.get('/:name', async(req,res)=>{
    try {
        const foundBand = await Band.findOne({
            where: {band_name:req.params.name},
            include:[{
                model: Meet_greet, 
                as:"meet_greets",
                include:{model:Event, as:"event", where:{event_name:{[Op.like]:`%${req.query.event?req.query.event:''}%`}}}
            },
            {
                model:Set_time,
                as: "set_times",
                include:{model:Event, as:"event",where:{event_name:{[Op.like]:`%${req.query.event?req.query.event:''}%`}}}  
            }
        ]})
        res.status(200).json(foundBand)

    } catch (error) {
        res.status(500).json(error)
    }
})

//Create a Band
bands.post('/', async(req,res)=>{
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (error){
        res.status(500).json(err)
    }
})
//Update a Band
bands.put('./:id',async(req,res)=>{
    try {
        const updatedBands= await Band.update(req.body, 
            {where: {band_id: req.params.id}})
        res.status(200).json({
            message: `Successfully Updated ${updatedBands} band(s)`
            })    
    } catch (error) {
            res.stau(500).json(err)
    }
})

// Delete a band
bands.delete ('/', async (req,res)=>{
    try {
        const deleteBands = await Band.destroy({
            where: {band_id:req.params.id}
        })
        res.status(200).json({
            message: `Successfule Deleted the bands ${deleteBands}`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})
//Export
module.exports=bands