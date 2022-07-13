//se pide el ingreso de un numero al usuario, se decrementa el numero y se muestran los pares y los impares

let numeroIngresado = Number(prompt("Ingrese un numero:"))

for( let i = numeroIngresado; i > -1 ; i-- ){

    if( (i % 2) == 0 ){
        console.log("Numero par: " + i)
    }else{
        console.log("Numero impar: " + i)
    }

}
