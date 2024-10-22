function carro(velMax = 200, aceleracao = 5, nome="carro"){
    let velAtual = 0 //variavel privada
    //this.velMax = 200 variavel publica
    //this.aceleracao = 5
    //this.nome = "nome do carro"
    this.setAceleracao = function(x){
        aceleracao = x
    }
    this.setAcelerar = function(){
        velAtual = (velAtual + aceleracao <= velMax)? (velAtual + aceleracao):(velMax)
    }
    this.getVelAtual = function(){
        return velAtual

    }
}
const corola = new carro()
corola.aceleracao = 20
corola.nome = "corola"
corola.velMax = 220
corola.setAcelerar()
corola.setAcelerar()
console.log(corola.getVelAtual())
//console.log(corola)

const fusca = new carro()
fusca.aceleracao = 10
fusca.nome = "fusca"
fusca.setAcelerar()
fusca.setAcelerar()
console.log(fusca.nome,fusca.getVelAtual())
fusca.velMax = 150
//console.log(fusca)