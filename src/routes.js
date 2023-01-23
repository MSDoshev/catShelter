const router = require('express').Router();
const {getHomePage} = require('./controllers/homeController')

const {getCreateCat, getCreateBreed, postCreateCat} = require('./controllers/catController');

router.get('/', getHomePage);

router.get('/addCat', getCreateCat);
router.post('/addCat', postCreateCat);

router.get('/addBreed', getCreateBreed);

module.exports = router