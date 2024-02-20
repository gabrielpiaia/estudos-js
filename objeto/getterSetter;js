const sequencia = {
    _valor : 1, // convenção que é pretendida acessar so privadamente
    get valor() {return this._valor++},
    set valor(valor) { 
        if(valor > this.valor) {
            this.valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)


sequencia.valor = 1000


console.log(sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor)

/// não exibe pq ta abaixo de 1000
sequencia.valor = 999



