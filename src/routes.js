const router = require('express').Router();

const {getCreateCat, getCreateBreed} = require('./controllers/catController');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/addCat', getCreateCat);

router.get('/addBreed', getCreateBreed);

module.exports = router