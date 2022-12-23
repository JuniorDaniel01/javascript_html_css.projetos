const resultado = document.getElementById('resultado');
/*const confirmar = document.getElementById('confirmar');*/

function insert(valor) {

    document.getElementById('resultado').innerHTML += valor;    
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back(voltar) {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    
}

function calcular() {

    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){

        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else { 
        document.getElementById('resultado').innerHTML = "insira os valores!"
    }
}

