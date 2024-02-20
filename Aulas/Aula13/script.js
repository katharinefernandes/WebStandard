// Mensagem de acordo com a idade informada

// let idade = prompt("Informe sua idade");

// if(idade < 18) {
//     document.write("Menor que 18!");
// } else if(idade > 20) {
//     document.write("Maior que 20!");
// } else {
//     document.write("Idade não identificada!");
// }

// Exercício de Fixação

// EXERCÍCIO 01 - Um banco concederá um crédito especial aos seus clientes do médio
// no último ano. Faça um programa que receba o saldo médio de um
// cliente e calcule o valor do crédito de acordo com a tabela a seguir .
// Mostre o saldo médio e valor do crédito.
// • Saldo médio - percentual
// • Acima de R$400 - 30% do saldo médio
// • De R$400 (inclusive) a R$300 - 25% do saldo médio
// • De R$300 (inclusive) a R$200 - 20% do saldo médio
// • Até R$200 (inclusive) – R$10% de saldo médio.

// let salMedio = prompt("Informe o salário médio");
// let valorCredito;

// if (salMedio <= 200) {
//   valorCredito = salMedio * 0.1;
// } else if (salMedio <= 300) {
//   valorCredito = salMedio * 0.2;
// } else if (salMedio <= 400) {
//   valorCredito = salMedio * 0.25;
// } else if (salMedio > 400) {
//   valorCredito = salMedio * 0.3;
// } else {
//   document.write("Salário médio informado inválido");
// }

// document.write(
//   "Salário médio: ",
//   salMedio,
//   " Valor do crédito: ",
//   valorCredito
// );

// EXERCÍCIO 02 - Escreva um script que receba dois números e calcule a diferença do maior pelo menor. Exiba na tela;
// let val1 = Number(prompt("Informe o primeiro valor:"));
// let val2 = Number(prompt("Informe o segundo valor:"));
// let valorMaior, valorMenor, diferenca;

// if (val1 > val2) {
//   document.write(val1 - val2);
// } else if (val2 > val1) {
//   document.write(val2 - val1);
// } else {
//   document.write("Os valores são iguais!");
// }

// EXERCÍCIO 03 -  Faça um script que receba duas notas, calcule e mostre a média aritmética e uma mensagem:
// 0 a 4 - Reprovado
// 4.1 a 7 - Exame
// 7.1 a 10 Aprovado

// let nota1 = Number(prompt("Informe a primeira nota:"));
// let nota2 = Number(prompt("Informe a segunda nota:"));
// let media = (nota1 + nota2) / 2;

// if (media >= 0 && media <= 4) {
//   document.write(media, " - Reprovado");
// } else if (media > 4 && media <= 7) {
//   document.write(media, " - Exame");
// } else if (media > 7 && media <= 10) {
//   document.write(media, " - Aprovado");
// } else {
//   document.write("Os valores informados são inválidos");
// }

// ESTRURURA DE REPETIÇÃO
// EXERCÍCIO 04 - Receber um número informado pelo usuário e escrever o valor da tabuada desse número

let num = Number(prompt("Informe um número: "));

document.write("Tabuada do ", num, ": <br />");

for (let i = 0; i <= 10; i++) {
  document.write(i, " x ", num, " = ", i * num, "<br/>");
}
