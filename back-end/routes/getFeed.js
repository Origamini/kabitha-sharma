const { error } = require('console');
const express = require('express');
const router = express.Router();
const feedbacks = require('../models/Feedback');

//This route will be for the owner of the app
router.get('/', async (req,res) =>{
    const feedback = await feedbacks.find();
    res.json(feedback);
})

module.exports = router;