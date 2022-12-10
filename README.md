# random-name-generator
Generate random team names from a list of colors, adjectives, and animals. This is great for filling in default or placeholder names for teams, projects, or anything else that needs a name.

Example:


## Installation
```bash
npm install @atomiclotus/random-name-generator
```

## Usage
```javascript
const oneName = new NameGenerator().get();
// => 'Courageous Bluebird'

const fiveNames = new NameGenerator().get(5);
// => 'Silly Walrus'
// => 'Clever Penguin'
// => 'Blue Echidna'
// => 'Chartruse Kangaroo'
// => 'Mauve Ostrich'
```