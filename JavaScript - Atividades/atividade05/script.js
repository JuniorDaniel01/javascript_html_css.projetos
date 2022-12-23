/*

alert(`Olá! Seja bem vindo ao cadastro de usuários.`)

let nome1 = prompt('Insira o nome: ')
let idade01 = Number (prompt('Insira a idade: '))
let nome2 = prompt('Insira o nome: ')
let idade02 = Number (prompt('Insira a idade: '))
//let nome3 = prompt('Insira o nome: ')
//let idade03 = Number (prompt('Insira a idade: '))

//let idades = document.getElementById("numeros").value;


console.log(nome1 ,idade01)




/*if (idade1 < idade2 && idade3) {
    alert(`${nome1} é menor de idade com ${idade1} anos.`)
} else {
    alert(`${nome1} é maior de idade com ${idade1} anos.`)
}*/

/*function clicar() {
  let idade = Number(document.getElementById("numeros").value)
  idade = idade.split(",");

  let maiorIdade = 0 
  let menorIdade = 0

  for (i = 0; i < idade.length; i++) {

    if (idade[i] >= 18) {
      maiorIdade++
      alert('Maior de idade!')
      
    } else {
      menorIdade++
      alert('Menor de idade!')

    }


  }

}*/


function verificarSexo() {

  let sexo = document.getElementById("sexo").value;
  document.getElementById("sexo").value = '';

}

function verificarAltura() {

  let altura = document.getElementById("altura").value;
  document.getElementById("altura").value = '';

altura = altura.split(",")
sexo = sexo.split(",")
let masculino = 0;
let feminino = 0;
let maior = parseFloat(altura[0]);
let menor = sexo[0];

for (i = 0; i < sexo.length; i++) {
  if (sexo[i] == "m") {

    masculino++;
  } else if (sexo[i] == "f") {

    feminino++;
  }

  if (parseFloat(altura[i]) > maiorAltura) {
    maiorAltura = parseFloat(altura[i]);
    sexoMaiorAltura = sexo[i];
  }

}
  document.write("Masculino: " + masculino + " - Feminino: " + feminino + "<br>");
  document.write("A maior altura é " + maiorAltura + " e pertence ao sexo " + sexoMaiorAltura);

}

