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




function verificarIdades(){
  var idades = document.getElementById("numeros").value;
  idades = idades.split(",");
  var maior = 0;
  var menor = 0;
  for(i=0;i<idades.length;i++){
      if(parseInt(idades[i]) >=18){
          maior++;
      }else{
          menor++;
      }
  }
  document.write("Maiores: "+maior+" - Menores: "+menor);
}


