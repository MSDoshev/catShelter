const db = require('../dataBase.json')

exports.getHomePage = (req, res) => {
    res.render('index', ({cats: db.cats}))
};