//Atividades
/*1 - Crie uma função JavaScript que receba duas notas, calcule e mostre no "Document" a 
média aritmética e mensagem que está na tabela a seguir:
0 a 4 - Reprovado
4 a 7 -  Exame
7 a 10 - Aprovado*/

let mediaAluno = (nota1 = 0, nota2 = 0) => {
  let media = (nota1 + nota2) / 2;

  if (media >= 7 && media <= 10) {
    document.write(media + "<br/> Aprovado");
  } else if (media >= 4) {
    document.write(media + "<br/> Exame");
  } else {
    document.write(media + " <br/>Reprovado");
  }
};

mediaAluno(5, 1);

/*2 - Crie uma função JavaScript que receba o preço de um produto, calcule e mostre no console
o novo preço, sabendo-se que este sofreu um desconto de 10%.*/

let novoValorProd = (vlrProduto = 0) => {
  let novoValor = vlrProduto * 0.9;

  console.log("Valor do Produto com Desconto: ", novoValor);
};

novoValorProd(100);

/*3 - Crie uma função JavaScript que calcule e mostre no "Document" a área de um quadrado. 
Sabe-se que: A = lado * lado*/

let areaQuadrado = (lado = 0) => {
  document.write("<br /> Área do Quadrado: ", lado * lado);
};

areaQuadrado(5);

/* 4 - Uma empresa decide dar um aumento de 30% aos funcionários com salários inferiores
a R$ 500,00. Crie uma função JavaScript que receba o salário do funcionário e 
mostre no "Document" o valor do salário reajustado ou uma mensagem, caso o funcionário não 
tenha direito ao aumento. */

let novoSalario = (salario = 0) => {
  if (salario < 500) {
    let novoSalario = salario * 1.3;
    document.write("<br/> O valor do salário com reajuste é R$: ", novoSalario);
  } else {
    document.write("<br/> O funcionário não possui direito ao aumento.");
  }
};

novoSalario(20);

/*5 - Crie uma função JavaScript que receba o ano de nascimento de uma pessoa 
calcule e mostre no Console:
	- a idade em anos;
	- a idade em meses
	- a idade em dias*/

let tempoNascimento = (anoNascimento = 0) => {
  let anoAtual = new Date().getFullYear();

  console.log(anoAtual);

  let anos = anoAtual - anoNascimento;
  let meses = anos * 12;
  let dias = meses * 30;

  console.log("Idade em anos: ", anos);
  console.log("Idade em meses ", meses);
  console.log("Idade em dias: ", dias);
};

tempoNascimento(2004);

/*6 - Crie uma função JavaScript que receba o peso de uma pessoa, calcule e mostre no console:
	a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
	b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado.*/

let peso = (pesoPessoa = 0) => {
    console.log("Novo peso se engordar: ", pesoPessoa*1.15);
    console.log("Novo peso se emagrecer: ", pesoPessoa*0.8);
}

peso(50);
