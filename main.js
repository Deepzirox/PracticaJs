import {Pikachu} from "./Pikachu.js"
import {Charmander} from "./Charmander.js"


class CampoDeBatalla {
    pokemon1;
    pokemon2;

    constructor(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    empezarBatalla() {
        let vida1 = this.pokemon1.getVida();
        let vida2 = this.pokemon2.getVida();

    
        while(vida1 >= 0 && vida2 >= 0) {

            this.pokemon1.RecibirDaño(this.pokemon2);
            this.pokemon2.RecibirDaño(this.pokemon1);

            this.pokemon1.CalcularAtaque();
            this.pokemon2.CalcularAtaque();
            console.log(`${this.pokemon1.getNombre()}: ${this.pokemon1.getVida()} - Ataque: ${this.pokemon1.getAtaque()}`);
            console.log(`${this.pokemon2.getNombre()}: ${this.pokemon2.getVida()} - Ataque: ${this.pokemon2.getAtaque()}`);
            console.log(`---------------------------------------------------------------`);

            vida1 = this.pokemon1.getVida();
            vida2 = this.pokemon2.getVida();
        }
    }
}





function main() {

    let pikachu = new Pikachu(100);
    let charmander = new Charmander(100);

    let arena = new CampoDeBatalla(pikachu, charmander);

    arena.empezarBatalla();


}


main();