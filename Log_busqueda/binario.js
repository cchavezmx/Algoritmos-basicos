/*
  Pre-requisitos: 
    Necesitamos que la lista este en donde de forma creciente, que sea de numeros, que los numeros no se repitan

  Entradas: 
    Una lista ordenada
    El valor que estoy buscando

  Salida: 
    Que si existe me retorne el index del elemento 
    Que si no existe retorne un -1
*/

const myOtherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const busquedaBinaria = (array, elemento) => {
  let medio = null
  let current = null
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    // necesito dividir mi array

    // medio es el index que estoy iterando
    medio = Math.floor((min + max) / 2)

    // es el valor que voy a ir examinando en cada interacion
    current = array[medio]

    if (current === elemento){
      // si el elemento que estoy buscando es igual al current retornar el index
      return medio
    }

    // que si el elemento es mayor le sumo 1 
    // el valor que estoy evaluando en la condicion del ciclo while
    if(elemento > current){
      min = medio + 1
    }

    // si el elemento es menor me voy a la izquieda y cambio min -1
    // el valor que estoy evaluando en la condicion del ciclo while
    if (elemento < current) {
      max = medio - 1
    }
  }

  return - 1
}


let resultado = busquedaBinaria(myOtherArray, 10)
console.log(resultado, 'hola')