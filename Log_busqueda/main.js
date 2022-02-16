console.log("Hola")
// busqueda lineal
// while()
// for()
// indexOf()
// un caso del dia a dia

// Arrary en JS funciona mas como unas lista linkeada pero que nos deja usar los metodos de Array
// Ecmas2006 ES6
// funciones flechas
// Template String
// const y let (nunca var)
// usar triple igual
// usar map o ForEach

/*
  Regla general de los algoritmos de busqueda: 
    Si existe el elemento retorna su index
    Si no existe retorna un -1
*/

const personas = ['Victor', 'Sam', 'Carlos', 'Eduardo', 'Jonh']

// con while
const busquedaLoop = (array, valor) => {
  //0 pasarle a la funcion un array y un valor
  // [1, 2, 3, 4, 5]
  // size = 5
  // index = 0
  // index = posicion de los elementos comienza desde cero !== length

  // 1. determinar el largo de la fila (array)
  let size = array.length
  // 2. donde debo de empezar (primera iteracion) 
  let index = 0

  // el ciclo while se detiene cuando ya se recorrieron todos los elementos
  while(index < size){
    let current = array[index]
    if (current === valor){
      return index
    }
    index++
  }
    return -1
}

const currentUser = 'Sam'
const resultado = busquedaLoop(personas, currentUser)
console.log(resultado)
if (resultado === -1){
  console.log(`No existe el tal ${currentUser}`)
}
