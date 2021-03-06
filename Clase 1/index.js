/**
 * 1) Iniciar un repositorio en GITHUB llamado fizzmod */
 https://github.com/Chuly92/fizzmod
 
 /*
 * 2) Agregarlo como remoto de origen a un repositorio local. En este repositorio se iran subiendo las respuestas de los siguientes ejercicios
 * 3) Crear una función que reemplace de manera provisoria la funcionalidad obtenia por el método map() del prototipo de Array que pueda pasar los siguientes tests :
*/

let numeros = [1,2,3,4]
//mapCustomizado => representa la funcion que ustedes tendrían que crear
mapCustomizado(numeros,numero=>numero+1) //[2,3,4,5]
mapCustomizado(numeros,(numero,indice)=>numero+indice) //[1,3,5,7]
mapCustomizado(numeros,numero=>{}) //[undefined,undefined,undefined,undefined]

function mapCustomizado (num){
  
    const numero = [numeros.length];
  	const indice = [numeros.length];
    
    for (let i=0 ; i < numeros.length; i++) {
      
      	numero[i] = numeros[i];         
        indice[i] = i;
      
      	console.log("Numero: " , numero);    //quitar
  		console.log("Indice: " , indice);  //quitar
      	
        } 
  
  	   	return numero;
 		
}; 

var func1 = mapCustomizado(numeros,numero=>numero+1);
console.log("Funcion 1: ", func1);

var func2 = mapCustomizado(numeros,(numero,indice)=>numero+indice);
console.log("Funcion 2: ", pepe2);

var func3 = mapCustomizado(numeros,numero=>{});
console.log("Funcion 3: ", func3); 

/**
 * 4) Modificar el prototipo de la funcion constructora Array para que admita como nuevo método la funcion customizada del paso anterior para que cumpla los siguientes tests :
 */
numeros.mapCustomizado(numero=>numero+1) //[2,3,4,5]
numeros.mapCustomizado((numero,indice)=>numero+indice) //[1,3,5,7]
numeros.mapCustomizado(numero=>{}) //[undefined,undefined,undefined,undefined]
numeros.hasOwnProperty("mapCustomizado") //false
"mapCustomizado" in numeros //true

/**
 * 5) Los miembros de trabajo especificados en el siguiente objeto usan su nombre como indice y su edad como valor. Separa los miembros mayores de 40 años y menores de 25 años en un array y todo el resto en un segundo array. Ambos arrays tienen que estar compuestos únicamente por los nombres de las personas. Por último cada array tiene que estar ordenado alfabeticamente.
 */

let miembros = { pedro : 35 , ana : 18 , carlos : 43 , juan : 21 , maria : 29 , angela : 31 , jose : 23 , mariana : 41 , eugenio : 19 }

/**
 * 4) Crear un fork de este repositorio en sus propias cuentas
 * 5) Clonar el fork obtenido
 * 6) Encontrar todos los errores en el siguiente programa , corregirlo y elevarlo como Push Request al repositorio de origen :
*/

(function(){
    "use strict"

    let x = 1 , arr = []
    y = 2
    arr.push(x,y)
    let res = arr.forEach(n=>{
        console.log(`El numero en el indice ${indice} es : ${n}`);
        res + 1
    })
    console.log(res) // [2,3]
})()

/**
 * 7) Crear un modulo .js que contenga una variable llamada base cuyo valor es el número 2 y tres funciones, las cual va a exportar cada vez que se requiera el archivo llamadas multiplicar , cambiarBase y consultarBase. La función multiplicar toma un valor como input de tipo Number o String y lo multiplica por el valor de la variable base. La función cambiarBase modifica el valor de la variable base el cual se mantiene para las próximas ejecuciones y consultarBase retorna el valor actual de la variable base
 */