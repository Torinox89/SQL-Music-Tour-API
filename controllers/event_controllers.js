//Dependencies
const events = require ('express').Router()
const db = require('../models')
const {Event} = db


//Find All Event
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Find a Specific Event
events.get('/:name', async(req,res)=>{
    try {
        const foundEvent = await Event.findOne({
            where: {event_name:req.params.name}
        })
        res.status(200).json(foundEvent)

    } catch (error) {
        res.status(500).json(error)
    }
})

//Create a Event
events.post('/', async(req,res)=>{
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch (error){
        res.status(500).json(err)
    }
})
//Update a Event
events.put('./:id',async(req,res)=>{
    try {
        const updatedEvents= await Event.update(req.body, 
            {where: {event_id: req.params.id}})
        res.status(200).json({
            message: `Successfully Updated ${updatedEvents} event(s)`
            })    
    } catch (error) {
            res.stau(500).json(err)
    }
})

// Delete a Event
events.delete ('/', async (req,res)=>{
    try {
        const deleteEvent = await Event.destroy({
            where: {event_id:req.params.id}
        })
        res.status(200).json({
            message: `Successfule Deleted the Event ${deleteEvent}`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})
//Export
module.exports=events