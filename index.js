const colors = require("./words/colors.json");
const adjectives = require("./words/adjectives.json");
const animals = require("./words/animals.json");

const NameGenerator = {
    colors: colors,
    adjectives: adjectives,
    animals: animals,
    getDescriptor: function() {
        const _colors     = NameGenerator.colors.entries;
        const _adjectives = NameGenerator.adjectives.entries;
        const color       = _colors[Math.floor(Math.random() * _colors.length)];
        const adjective   = _adjectives[Math.floor(Math.random() * _adjectives.length)];
        const descriptor  = [color, adjective][Math.floor(Math.random() * 2)];
        return descriptor;
    },
    getAnimal: function() {
        const _animals = NameGenerator.animals.entries;
        const animal   = _animals[Math.floor(Math.random() * _animals.length)];
        return animal;
    },
    get: function(count) {
        if (!count) count = 1;
        let results = [];
        for (let i = 0; i < count; i++) {
            let descriptor = NameGenerator.getDescriptor();
            let animal     = NameGenerator.getAnimal();
            results.push(`${descriptor} ${animal}`.toLowerCase());
        }
        if (count === 1) return results[0];
        return results;
    }
}

module.exports = NameGenerator;