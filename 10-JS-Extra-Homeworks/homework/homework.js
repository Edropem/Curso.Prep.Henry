// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.entries(objeto);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var letras = {};
  for (let i = 0; i < string.length; i++) {
    var letra = string.charAt(i);
      if (letras[letra]){
        letras[letra]++
      } else {
        letras[letra]= 1;
      }
  }
  return letras;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var sArrAllCaps = s.toUpperCase().split("");
  var sArray = s.split("");
  var newS = [];
  for (let i = sArray.length; i >= 0; i--) {
    if (sArray[i] === sArrAllCaps[i]) {
      newS.unshift(sArray[i])
    }
  }
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== sArrAllCaps[i]) 
    newS.push(sArray[i])
  }
  return newS.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strToArr = str.split(" ");
  var reversed = [];
  for (let i = 0; i < strToArr.length; i++) {
    var reversedWord = strToArr[i].split("").reverse().join("");
    reversed.push(reversedWord);
  }
  return reversed.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroStr = numero.toString().split("").reverse().join("");
  numeroStrNum = Number(numeroStr);
  if (numero === numeroStrNum) {
    return "Es capicua"
  } else return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  function eliminarabc(letra){
    if (letra === "a" || letra === "b" || letra === "c"){
      return "";
    } else return letra;
  }
  var cadenaArray = cadena.split("").map(eliminarabc);
  return cadenaArray.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function (a, b){return a.length - b.length});
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var commonArr = []
  function intersecciones(num) {
    if (arreglo2.includes(num)) {
      return num;
    }
  }
  commonArr = arreglo1.filter(intersecciones);
  return commonArr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

