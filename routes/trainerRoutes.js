const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

router.get('/trainers', trainerController.getTrainers);

// New DELETE route
router.delete("/trainers/:id", trainerController.deleteTrainer);

module.exports = router;
