export default class Porta{
    #numero 
    #temPresente
    #selecionada
    #aberta

    constructor(numero, temPresente = false, selecionada = false, aberta = false){
        this.#numero
        this.#temPresente
        this.#selecionada
        this.#aberta
    }

    get numero(){
        return this.#numero
    }

    get temPresente(){
        return this.#temPresente
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }
}