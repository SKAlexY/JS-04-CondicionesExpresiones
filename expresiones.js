/*
Operador 

Un elemento que nos permite realizar una operacion entre dos o mas elementos.


- Operadores aritmeticos (+, - , * , /)
- Operadores de asignacion (=, ==, === / asignacion, igualdad, igualdad estricta)
- Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
- Operadores logicos (&&, ||, !)
- Operadores de comparacion (<, >, <=, >=, =, ==, ===)
*/

//Operadores aritmeticos 
//Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operacioones matematicas.

//suma (+): Se utiliza para sumar dos numeros.
let resultado = 5 + 3; //resultado contendra el valor 8

//Resta (-): Se utiliza para restar un numero de otro.
let resultado1 = 10 - 4; // resultado contendra el valor 6

//Multiplicacion (*): Se utiliza para multiplicar dos numeros.
let resultado2 = 6 * 3; // resultado contendra el valor 18

//Division (/): Se utiliza para dividir un numero por otro. La division por cero produce un valor especial llamado "infinity" (infinito).
let resutado3 = 15 / 3; // resultado contendra el valor 5

//Modulo (%): Se utiliza para obtener el rsto de una division entre dos numeros.
let resultado4 = 10 % 3; // resultado contendra el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.
let numero = 5;
numero++;
//ahora numro contendra el valor 6

//Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.
let numero1 = 8;
numero--;// ahora numero contendra el valor 7

//Doble igual - igualdad Abstracta
5 == "5" // true ya que JS convierte la cadena "5" a un numero antes de la comparacion.


// Triple igual - Igualdad estricta 
5 === "5" // false, poruqe no son del mismo tipo y los tipos tambien difieren.




/*function convertir(grados){
    var fahrenheit = (grados * 9/5) + 32;
    return fahrenheit;
}

var temperaturaCelsius = 30;
var fahrenheit = convertir(temperaturaCelcius);
console.log(temperaturaCelsius + " °C son rquivalentes a " + fahrenheit + " °F.");*/



/* Operadores logicos 

Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado es booleano (true o flase).

     - AND $$: Sirve para determinar si dos extresiones son verdadesras. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.

*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere){
    console.log("Estoy feliz");
}else{
    console.log("Haganse a un lado que me quiero morir");
}

/*
      - OR ||: Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadero, todo es verdadero. Si las dos son falsas, todo es falso.
    
 */

if (hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
}else{
    console.log("Felipe no desayuna chido");
}

/*
NOT(!): Regresa lo contrario de lo que evaluamos 
*/

//Este codigo esta incompleto, puede causar errores (explicacion de anidacion de operadores logicos)
let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0);
let escenario2 = (edadeFelipe >=18 && amigosQueInviten = true);

if (escenario1 || escenario2){
}

