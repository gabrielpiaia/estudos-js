class Lancamento {
    constructor(nome = 'Genérico,', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamnentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
    }
}

const salario = new Lancamento('Salario', 99999)
const contaDeLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamnentos(salario, contaDeLuz)

console.log(contas.sumario())