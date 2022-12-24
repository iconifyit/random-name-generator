#!/usr/bin/env node

/*
 * Capture CLI arguments.
 */
const [,, ...args] = process.argv

/*
 * Make sure we have at least one argument.
 */
if (args.length > 0 && args[0] === 'help') {
    console.log(
        "\nUsage : \n" +
        "    @param {string} input   The number of names to generate \n" +
        "\n"
    );
    return;
}

const NameGenerator = require('./index');
let count = parseInt(args[0]) || 1;

console.log(
    NameGenerator.get(count)
);
