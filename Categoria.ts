import Livro from "./Biblioteca";

export class LivroCategoria extends Livro{
    categoria:string;

    constructor(categoria:string, titulo:string, autor:string, ano:number){
        super(titulo, autor, ano )
        this.categoria = categoria;
    }

    exibirDetalhes():void{    
        console.log(`O titulo do livro é ${this.titulo}`)
        console.log(`O autor do livro é ${this.autor}`)
        console.log(`A categoria do livro é ${this.categoria}`)
        console.log(`O ano do livro é ${this.ano}`)
        console.log('')
        
    }

    eAntigo():boolean{
        if(this.ano < 2000){
            return true
        }
        else{
            return false
        }
    }
} 

const lista:LivroCategoria[] = [
    new LivroCategoria ('Harry Potter', 'JK', 'Ficção', 1997),
    new LivroCategoria ('Percy Jackson', 'Willy', 'Ficção', 2005)
]

lista.forEach(livro => {
    livro.exibirDetalhes()
    if(livro.eAntigo()){
        console.log('É antigo')
    }else{
        console.log('É novo')
    }
})



