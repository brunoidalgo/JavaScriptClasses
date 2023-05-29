class Loja {
    constructor(nome, ramo, cnpj, email){
        this.nome = nome;
        this.email = email;
        this.ramo = ramo;
        this.cnpj = cnpj;
    }

    exibeLoja (){
        console.log(`A loja ${this.nome} está iniciando os serviços, qualquer duvida chamar no e-mail ${this.email}`)
    }
}



const empkeTech = new Loja ("Empketech", "Tecnologia da Informação", "46354362467/0001", "empketech@gmail.com");

console.log(empkeTech)
empkeTech.exibeLoja();
