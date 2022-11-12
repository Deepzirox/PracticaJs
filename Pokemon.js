// Clase base

export class Pokemon {
    vida;
    nombre;
    nivel_ataque;

    constructor(vida) {
        this.vida = vida;
        this.nombre = this.constructor.name;
        this.CalcularAtaque();
    }

    getNombre() {
        return this.nombre;
    }

    getVida() {
        return this.vida;
    }

    getAtaque() {
        return this.nivel_ataque;
    }

    CalcularAtaque() {
        this.nivel_ataque = Math.floor(Math.random() * 30);
    }

    RecibirDaño(pokemonEnemigo) {
        let ataque_pokemon_enemigo = pokemonEnemigo.nivel_ataque;
        this.vida -= ataque_pokemon_enemigo;
    }

}
