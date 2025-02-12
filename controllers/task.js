const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error){
        res.status(404).json({message: error})
    }
    
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (err) {
        res.status(500).json({ msg: err })
    }
    
}

const getSingleTasks = async (req, res) => {
  
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if (!task) {
            return res.status(404).json({message: `Task not found with id: ${taskID}` })
        }
        res.status(200).json({task})
    } catch (error){
        res.status(500).json({message: error})
    }
}

const deleteTasks = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if (!task) {
            return res.status(404).json({message: `Task not found with id: ${taskID}` })
        }
        res.status(200).json({task})
    } catch (error){
        res.status(500).json({message: error})
    }
}  

const updateTasks = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        })
        
        if (!task) {
            return res.status(404).json({message: `Task not found with id: ${taskID}` })
        }
        res.status(200).json({task})
    } catch (error){
        res.status(500).json({message: error})
    }
}

module.exports = {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}