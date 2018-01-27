// this file will grab everything from the folder and import it
'use strict';

const fs = require('fs');
const exclusions = ['.', '..', 'index.js'];

const models = fs.readdirSync(__dirname, { encoding: 'utf8' })
    .filter(filename => exclusions.indexOf(filename) === -1)
    .reduce(function (modelObj, filename) {
        const model = require(`./${filename}`);
        const modelName = model.modelName;
        modelObj[modelName] = model;

        return modelObj;
    }, {});

module.exports = models;