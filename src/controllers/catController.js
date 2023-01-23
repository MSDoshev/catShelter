const Cat = require('../models/Cat');

exports.getCreateCat = (req, res) => {

    res.render('addCat');
};
exports.getCreateBreed = (req, res) => {

    res.render('addBreed');
};
exports.postCreateCat = (req, res) => {
    const {name, description, image, breed} = req.body
    let cat = new Cat(name, description, image, breed);
    Cat.save(cat);

    res.redirect('/')

}