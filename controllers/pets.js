const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');
// const getBreeds = require('../bin/petfinder.js')

const getBreedList = require('../bin/petfinder.js');
const findShelter = require('../bin/shelter.js');



router.post('/getBreedList', (req, res)=>{
	console.log('req.body: ', req.body);
	getBreedList(res, req.body);
});

router.post('/findShelter', (req, res)=>{
    console.log('req.body: ', req.body);
    findShelter(res, req.body);
});


module.exports = router;
