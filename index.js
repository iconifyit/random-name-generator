import colors from "../helpers/colors.json";
import adjectives from "../helpers/adjectives.json";
import animals from "../helpers/animals.json";
import { pluralize, camelize } from 'inflected';


class NameGenerator {

    #adjectives = [];
    #animals = [];
    #colors = [];

    constructor() {
        this.#colors = colors.entries;
        this.#adjectives = adjectives.entries;
        this.#animals = animals.entries;
    }
    
    get(count=1) {
        const results = [];
        for (let i = 0; i < count; i++) {
            let color = this.#colors[Math.floor(Math.random() * this.#colors.length)];
            let adjective = this.#adjectives[Math.floor(Math.random() * this.#adjectives.length)];
            let descriptor = [color, adjective][Math.floor(Math.random() * 2)];
            let animal = this.#animals[Math.floor(Math.random() * this.#animals.length)];
            results.push(
                camelize(pluralize(
                    `${descriptor} ${animal}`
                ))
            );
        }
        if (count === 1) return results[0];
        return results;
    }
}

export default NameGenerator;