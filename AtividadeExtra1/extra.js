let idade = 16; 
if (idade < 13) {
    console.log("Criança");
} else if (idade > 13 && idade <= 19) { 
    console.log("Adolescente");
} else {
    console.log("Adulto");
}
// O que você deve mudar para garantir que a idade 13 também seja considerada 'Adolescente'?

/*Resposta: No 'else if' a tag idade deve estar como '>= 13' e não '> 13'
Ex. de como deve ficar: 'else if (idade >= 13 && idade <= 19)'*/