const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)   //acessar atributo de objeto com o this
    }
}

pessoa.falar()
const falar = pessoa.falar   // armazena a função falar na constante falar
falar()   // conflito


const falarDePessoa = pessoa.falar.bind(pessoa)   // bind quer dizer que o this será resolvido para pessoa 
falarDePessoa()



