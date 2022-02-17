console.log("Hola mundo");

/*
  Entrada: aceptar un array desordenado
*/


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
// console.log(miArray)
// let arregloFinal = bubbleSort(miArray)
// console.log(arregloFinal)

/*
  Entrada: Un arreglo desordenado

  1 funcion recurusiva
        1.0 necesitmo primero definir hasta cuando vamos a seguir ejecutando la misma funcion
        1.2 dividir el array
        1.3 volver a llamar la funcion

  **ya que este separa en arrays independientes, tenemos que ejecutar una funcion que los una. 

  2 funcion while que compare y combine todos los arrays



  Salida: Retornar el arreglo ordenado

*/

const miArray = [10, 4, 40, 32, 67, 43, 12, 31, 63, 1];
// MERGE SORT ES UNA FUNCION RECURSIVA
const mergeSort = (array) => {
  // con esta validacion si el array es menor a 1 retornar el array
  if(array.length  <= 1){
    return array
  }

  const middle = Math.floor(array.length / 2)

  // con slice dividimos el array
  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)

  // aqui voy a copuar la misma funcion que ya divide el array
  const leftRecursivo = mergeSort(left)
  const rightRecursivo = mergeSort(right)

  return merge(leftRecursivo, rightRecursivo)
}

// Entrada: arrayIzquierdo y un array Derecho

const merge = (left, right) => {
  const valores = []

  while(left.length && right.length){
      if(left[0] < right[0]) {
        // si el valor menor esta en el array izquierdo hago push a valores
      valores.push(left.shift())
    } else {
      // si no esta a la izquierda esta a la derecha
      valores.push(right.shift())
    }
    // spread operator "saca" solo los valores
    return [...valores, ...left, ...right ]
  }
}

let results = mergeSort(miArray)
console.log(results)