import {Pokemon} from "./Pokemon.js"

export class Charmander extends Pokemon {

    constructor(nombre, vida) {
        super(nombre, vida);
        this.nombre = this.constructor.name;
    }
}
