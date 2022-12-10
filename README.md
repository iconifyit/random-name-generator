# random-name-generator
Generate random team names from a list of colors, adjectives, and animals. This is great for filling in default or placeholder names for teams, projects, or anything else that needs a name.

Example:


## Installation
```bash
npm install @atomiclotus/random-name-generator
```

## Usage
By default, the generator will return a single name. You can also pass in a number to get multiple names.

```javascript
const NameGenerator = require('@atomiclotus/random-name-generator');

const oneName = new NameGenerator().get();
// => 'courageous bluebird'

const fiveNames = new NameGenerator().get(5);
// => 'silly walrus'
// => 'clever penguin'
// => 'blue echidna'
// => 'chartreuse kangaroo'
// => 'mauve ostrich'

// Get a random color.
const color = new NameGenerator().getColor();
// => 'blue'

// Get a random adjective.
const adjective = new NameGenerator().getAdjective();
// => 'courageous'

// Get a random descriptor (could be a color or adjective).
const descriptor = new NameGenerator().getDescriptor();
// => 'silly'

// Get a random animal.
const animal = new NameGenerator().getAnimal();
// => 'ostrich'
```