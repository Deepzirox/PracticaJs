import {Pokemon} from "./Pokemon.js"


export class Pikachu extends Pokemon {

    constructor(vida) {
        super(vida);
        this.nombre = this.constructor.name;
    }
}

