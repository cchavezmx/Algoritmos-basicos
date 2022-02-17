console.log("Hola mundo");

/*
  Entrada: aceptar un array desordenado
*/

const miArray = [10, 4, 40, 32, 67, 43, 12, 31, 63, 1];

const bubbleSort = (array) => {
  for(let i = 0; i < array.length; i++){
    // este for nos va a servir para iterar el arrego
    for(let j = 0; j < array.length; j++){
      // este for es para iterar y comprar las perejas
      // i y j son los index
      // array[i] o array[j] estamos hablando de valores
      if (array[j] > array[j + 1]){
        // hacemos la evaluacion del elemento acutal con el siguiente
        let current = array[j]

        array[j] = array[j + 1]
        array[j + 1] = current
      }
    }
  }
  // regresamos el mismo array ya mutado
  return array
}
console.log(miArray)

let arregloFinal = bubbleSort(miArray)

console.log(arregloFinal)