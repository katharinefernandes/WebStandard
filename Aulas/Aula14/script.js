// ESTRUTURA DE REPETIÇÃO
/* console.log("FOR");
for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

// ESTRUTURA WHILE
/* console.log("WHILE");
let x = 0;
while (x != 10) {
  console.log(x);
  x++;
} */

// ESTRUTURA DO WHILE
/* console.log("DO WHILE");
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10); */

// FUNÇÕES
/* console.log("FUNCTION - SEM PARÂMETROS")
function somar() {
  let n1 = 5,
    n2 = 8;
  console.log(n1 + n2);
}
somar();

console.log("FUNCTION - COM PARÂMETROS")
function multiplicacao(a,b) {
  console.log(a*b);
}
multiplicacao(3,4); */

// ler um número inteiro, em seguida calcular e mostrar o dobro deste número
/* console.log("DOBRO DO NÚMERO");
function lerNumero() {
  return Number(prompt("Digite um número: "));
}

let num = lerNumero();

function exibir(num) {
console.log(num * 2);
}

exibir(num); */

// 1. Utilizando funções crie um script que leia três números inteiros e mostre a média aritmética dos mesmos.

/* console.log("MEDIA ARITMEDICA");
function lerValor() {
  return Number(prompt("Digite um número: "));
}

let num1 = lerValor();
let num2 = lerValor();
let num3 = lerValor();

function exibirMedia(num1, num2, num3) {
  console.log("Média: ", (num1 + num2 + num3) / 3);
}

exibirMedia(num1, num2, num3); */

// 2. Utilizando funções crie um script calcule e mostre a área de um triângulo (area = (base * altura)/2)
/* console.log("ÁREA TRIÂNGULO");

function lerValor(text = "Digite um valor") {
  return Number(prompt(text));
}

let base = lerValor("Informe a base do triângulo: ");
let altura = lerValor("Informe a altura do triângulo: ");

function areaTriangulo(base, altura) {
  console.log("Área do Triângulo :", (base * altura) / 2);
}

areaTriangulo(base, altura);*/

// 3 - Utilizando funções crie um script que leia o nome de uma pessoa e o ano de nascimento, calcule e mostre o nome e a idade em linhas separadas;

/* console.log("CALCULA A IDADE");
function calcIdade(anoNacimento) {
  let anoAtual = new Date().getFullYear();

  return anoAtual - anoNacimento;
}

function infoPessoa() {
  let nome = String(prompt("Informe um nome: "));
  let anoNacimento = Number(prompt("Informe o ano de nascimento: "));

  let idade = calcIdade(anoNacimento);

  console.log(
    "Nome:",
    nome,
    "Idade:",
    idade,
    "Ano de Nascimento:",
    anoNacimento
  );
}

infoPessoa(); */

// 4 - Utilizando funções crie um script que atenda:
// Uma loja utiliza o código 'V' para compras a vista e 
// 'P' a prazo. Calcule e mostre:
//  - o valor das compras a Vista 
//  - o valor das compras a Prazo
//  - O total das vendas

let totalVendas = 0;

function calcValorCompra(tipoPagamento = "V", valorCompra = 0, parcelas = 0) {
  totalVendas += valorCompra;

  if(tipoPagamento === "V") {
    return valorCompra;
  } else {
    return valorCompra/parcelas;
  }
}

function infosCompra() {

  let qtdCompras = Number(prompt("Informe a quantidade de compras: "));

  for(let i=0; i<qtdCompras; i++) {
    let text = "Informe o valor da compra " + (i+1);
    let valorCompra = Number(prompt(text));
    let tipoPagamento = String(prompt("Informe o tipo de pagamento (V - À vista | P - À prazo): "));
    let parcelas = 0;

    
    console.log((i+1), "° Compra");
    console.log("Valor: ", valorCompra);
    console.log("Tipo de Pagamento: ", tipoPagamento);

    let valorCompraFinal = calcValorCompra(tipoPagamento, valorCompra, parcelas);

    if(tipoPagamento === "P") {
      parcelas = Number(prompt("Informe a quantidade de parcelas: "));
      console.log("Quantidade de parcelas ", parcelas);
      console.log("Valor final da compra: ", valorCompraFinal, " x ", parcelas);
    } else {
      console.log("Valor final da compra: ", valorCompraFinal);
    }
  }
}

console.log("Total das Vendas: ", totalVendas);

infosCompra();

// 5 - Utilizando funções crie um script que calcule e mostre a quantidade de números entre 30 e 90.
