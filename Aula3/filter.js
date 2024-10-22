const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
]
const eletronicos = p => p.eletronico
console.log(produtos.filter(eletronicos));

const mil = p => p.preco > 1000
console.log(produtos.filter(mil));

const comiss = p => p.preco >= 1500 ? p.preco * 1.03 : p.preco * 1.06
console.log(`R$${produtos.map(comiss).join('\n\nR$')}`);


