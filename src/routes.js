const router = require('express').Router();
const {getHomePage} = require('./controllers/homeController')

const {getCreateCat, getCreateBreed} = require('./controllers/catController');

router.get('/', getHomePage);

router.get('/addCat', getCreateCat);

router.get('/addBreed', getCreateBreed);

module.exports = router