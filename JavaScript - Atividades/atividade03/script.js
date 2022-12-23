function maiorNumero() {

    let numeros = document.getElementById("numeros").value

   /* var maior = parseInt(numeros[0]);

    for(i=1;i<numeros.length;i++){
        if(parseInt(numeros[i]) > maior){
            maior = parseInt(numeros[i]);
        }

    */

        var maior = numeros

        for(i=1;i<numeros.length;i++){
            if((numeros[i]) > maior){
                maior = numeros[i];
            }
    }

    console.log(numeros)
    document.write(`O maior número é: ${maior}`); 

}