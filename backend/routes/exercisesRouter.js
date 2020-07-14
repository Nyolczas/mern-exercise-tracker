const router = require('express').Router();
const { 
    getExercises, 
    createExercise, 
    showExercise, 
    deleteExercise,
    updateExercise
} = require('../controllers/exercisesController');

// get all
router.get('/', getExercises);

// add
router.post('/add', createExercise);

// show
router.get('/:id', showExercise);

// delete
router.delete('/:id', deleteExercise)

// update
router.post('/update/:id', updateExercise);

module.exports = router;