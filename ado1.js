
class Rato {
    constructor(novoNome, novaRaca, novoPeso, novoTamanhoDentes) {
        this.forcaAtaque = 0;
        this.nome = novoNome;
        this.raca = novaRaca;
        this.peso = novoPeso;
        this.tamanhoDentes = novoTamanhoDentes;
    }
    alimentar(novoPeso) {
        console.log(`${this.nome} está se alimentando!`);
        this.peso += novoPeso;
        console.log(`O peso de ${this.nome} agora é de ${this.peso}!`);
    }
    roer(novoRoer) {
        console.log(`${this.nome} está roendo!`);
        this.tamanhoDentes -= novoRoer;
        console.log(`O tamanho dos dentes de ${this.nome} agora é de ${this.tamanhoDentes}!`);
    }
    ataque(novaForcaAtaque) {
        this.forcaAtaque += novaForcaAtaque;
        if (this.forcaAtaque < 50) {
            console.log(`${this.nome} está atacando! ... O ataque falhou!`);
        }
        else {
            console.log(`${this.nome} está atacando! ... O ataque foi bem sucedido (${this.forcaAtaque} de DP) `);
        }
    }
}
//Objeto 1 da classe rato
const ratoFrances = new Rato("Remy", "Ratazana", 500, 15);
console.log(ratoFrances.nome);
ratoFrances.alimentar(15);
ratoFrances.roer(20);
//Objeto 2 de classe rato
const ratoSBT = new Rato("Xaropinho", "Ratazana", 300, 45);
console.log(ratoSBT.nome);
ratoSBT.alimentar(15);
ratoSBT.roer(20);
//Objeto 3 da classe rato
const ratoPokemon = new Rato("Raticate", "Pokemon", 400, 55);
console.log(ratoPokemon.nome);
ratoPokemon.alimentar(20);
ratoPokemon.roer(20);
ratoPokemon.ataque(45);