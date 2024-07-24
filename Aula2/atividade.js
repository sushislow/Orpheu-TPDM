function bomdia(Edu) {
    console.log(`Bom dia ${Edu}, seja bem-vindo`)
}
bomdia(`Edu`)

function nmeses(mes) {
    switch (mes) {
        case 1:
            console.log('Mês 1: Janeiro')
            break;
        case 2:
            console.log('Mês 2: Fevereiro')
            break;
        case 3:
            console.log('Mês 3: Março')
            break;
        case 4:
            console.log('Mês 4: Abril')
            break;
        case 5:
            console.log('Mês 5: Maio')
            break;
        case 6:
            console.log('Mês 6: Junho')
            break;
        case 7:
            console.log('Mês 7: Julho')
            break;
        case 8:
            console.log('Mês 8: Agosto')
            break;
        case 9:
            console.log('Mês 9: Setembro')
            break;
        case 10:
            console.log('Mês 10: Outubro')
            break;
        case 11:
            console.log('Mês 11: Novembro')
            break;
        case 12:
            console.log('Mês 12: Dezembro')
            break;
    }
}
nmeses(3)

function valores(n1, n2) {
    if (n1 == NaN || n2 == NaN) {
        console.log(`Um ou os dois números que você digitou não é um número`)
    }
    else if (n1 > n2) {
        console.log(`o primeiro número é maior que o segundo`)
    }
    else if (n2 > n1) {
        console.log(`o primeiro número é menor que o segundo`)
    }
    else if (n1 == n2)
        console.log(`Os números são iguais`)
}
valores(9, 6)

function sal(salario, trabalho, falta) {
    let hora = salario / 176
    let amais = hora * 1.50 * trabalho
    let amenos = hora * falta * 8
    let liqd = parseInt(salario) + parseInt(amais) - amenos
    console.log(`Salário R$${salario},00 Salário líquido é R$${liqd},00 Total de horas extras R$${amais},00 Quantidade de faltas ${amenos}`);
}
sal(10000,80,10 )

const dine = [2, 4, 67, 8, 9, 90, 0, "dia", "hoje", "tio", "yellow", "ui"]
function machar() {
    console.log(`${dine[0]} ${dine[dine.length - 1]}`)
}
machar()