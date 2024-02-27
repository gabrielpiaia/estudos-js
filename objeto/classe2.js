class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'professor') {
        super(sobrenome) // 
        this.profissão = profissão
    }
}


class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}


const filho = new Filho
console.log(filho)