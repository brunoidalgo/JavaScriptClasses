class Livro {
    constructor(titulo, paginas, editora){
        this.titulo = titulo
        // Criada uma variável let que recebe o parâmetro título
        this.paginas = paginas
        // Criada uma variável let que recebe o parâmetro paginas
        this.editora = editora 
        // Criada uma variável let que recebe o parâmetro editora
    }
    mostraTitulo() {
        console.log(`Titulo do livro: ${this.titulo}.`)
    }

    exibeAnuncio() {
        console.log(`A editora ${this.editora} anunciou o livro ${this.titulo} que tem ${this.paginas} páginas.`)
    }
};


const nodeJs = new Livro ("NodeJs", 150, "Paramount")


console.log(nodeJs)