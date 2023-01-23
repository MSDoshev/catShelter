const fs = require('fs');
const db = require('../dataBase.json');
const path = require('path');
const { json } = require('express');

class Cat{
    constructor(name, description, image, breed){

        this.name = name; 
        this.description = description; 
        this.image = image; 
        this.breed = breed; 
    }


    static save(cat){
        db.cats.push(cat);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../dataBase.json'), jsonData);
    }

}

module.exports = Cat;

