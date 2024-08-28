function cel(marca, modelo, ram, armazenamento, preco) {
    this.getPreco = function () {
        return preco
    }
    this.getValores = function () {
        return { marca, modelo, ram, armazenamento }
    }
}
const MotoG13 = new cel("Motorola", "Moto G13", 8, 128, 2500);
console.log(MotoG13.getValores())
console.log(`Preço: ${MotoG13.getPreco()}`)

const Iphone13 = new cel("Apple", "Iphone 13", 12, 256, 5450);
console.log(Iphone13.getValores())
console.log(`Preço: ${Iphone13.getPreco()}`)