const NameGenerator = require('./index');
const colors = require('./words/colors.json');
const adjectives = require('./words/adjectives.json');
const animals = require('./words/animals.json');


test('Generates one random name', () => {
    const theName = NameGenerator.get();
    const theNameParts = theName.split(' ');
        expect(typeof theName).toBe('string');
        expect(theNameParts.length).toBeGreaterThan(1);

        let descriptor = NameGenerator.getDescriptor();
        let animal = NameGenerator.getAnimal();
        expect([].concat(
            colors.entries,
            adjectives.entries
        ).includes(descriptor)).toBe(true);
        expect(animals.entries.includes(animal)).toBe(true);
});

test('Generates ten random names', () => {
    let count = 10;
    const theNames = NameGenerator.get(count);

    expect(Array.isArray(theNames)).toBe(true);
    expect(theNames.length).toBe(count);
});

test('Generates a random descriptor', () => {
    let count = 10;
    for (let i = 0; i < count; i++) {
        let descriptor = NameGenerator.getDescriptor();
        expect(
            [].concat(
                colors.entries,
                adjectives.entries
            ).includes(descriptor)
        )
        .toBe(true);
    }
});

test('Generates a random animal', () => {
    let count = 10;
    for (let i = 0; i < count; i++) {
        expect(
            animals.entries.includes(
                NameGenerator.getAnimal()
            )
        )
        .toBe(true);
    }
});