const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
    } = require('../controllers/task')

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getSingleTasks).patch(updateTasks).delete(deleteTasks)


module.exports = router