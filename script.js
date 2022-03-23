/*  Condições para votar:

>= 18 e <70 (obrigatório) // maiores ou iguais a 18 e menores de 70 anos
> 15 e < 18 ou >= 70 (opcional) // entre 16 e 17 
< 16 (não pode votar) // menores de 16

Obs.: se você não estiver na sua cidade também não pode votar
*/

var nome = prompt('Digite o seu nome: ')
    alert('Olá,' + ` ${nome}` + '. Estamos muito felizes que você esteja realizando o cadastro')

var idade = prompt('Por favor' + ` ${nome}` + ', digite a sua idade: ')

if  (idade > 15 && idade < 18 || idade > 70) {
    alert(` ${nome}` + ', o voto é opcional')
} else if (idade < 16) {
    alert(` ${nome}` + ', infelizmente você ainda não pode votar')
} else {
(idade >= 18 && idade < 70)
    alert(` ${nome}` + ', você é obrigado a votar!')
}
   
var cidade = prompt('Você está em sua cidade?')
    
    if (cidade == 'Sim') {
        alert('Legal, você poderá ir votar')
    } else {
        alert('Infelizmente você não poderá ir votar!')
    }
