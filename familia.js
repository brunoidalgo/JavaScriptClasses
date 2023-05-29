class Pessoa {
    constructor(nome, idade, parentesco){
        this.nome = nome
        this.idade = idade
        this.parentesco = parentesco
    }

    exibePropriedades() {
        console.log(`O noivo ${this.nome} está muito feliz de casar com ${this.idade} anos`)
    }
    
}


const bruno = new Pessoa ("Bruno", 21, "Noivo")
const jessica = new Pessoa ("Jéssica", 31, "Noiva")


console.log(bruno)
console.log(jessica)
bruno.exibePropriedades();