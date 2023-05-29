class Cliente {
    constructor(loja, endereco, email, idade){
        this.loja = loja
        this.endereco = endereco
        this.email = email
        this.idade = idade
    }

    exibeEndereco() {
        console.log(`O endereço do cliente é ${this.endereco}.`)
    }
    enviaEmail() {
        console.log(`Enviando email para o cliente ${this.nome} no endereço ${this.email}`)
    }
    exibeDados(){
        console.log(`O cliente ${this.nome} que tem a idade ${this.idade} mora no endereço ${this.endereco}.`)
    }
}


const bruno = new Cliente("Bruno", "Rua Prudente de Morais 1972", "bruno@dominio.com", 21 )



class Dono extends Cliente { // o extends sere para dizermos ao JS que queremos as mesma propriedades da classe referênciada.
    constructor(loja, nome){
        super(loja) // Super significa que vai adquirir o mesmo nome de classe da referência.
        this.nome = nome
    }

    exibeDono() {
        console.log(`O ${this.nome} é dono da ${this.loja}`)
    }

    descreverEmpresa(){
        console.log(`O ${this.nome} faz parte da empresa ${this.loja}`)
    }
};


const dono = new Dono("EmpkeTech", "Bruno")


dono.descreverEmpresa();

