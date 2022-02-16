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
// const resultado = busquedaLoop(personas, currentUser)
// console.log(resultado, 'la posicion de la persona dentro del array')
// if (resultado === -1){
//   console.log(`No existe el tal ${currentUser}`)
// }

// if (resultado !== -1){
//   console.log(`Bienvendid@ ${personas[resultado]}`)
// }

const busquedaFor = (array, valor) => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === valor){      
      // nos retorna el index si encontramos el valor
      return i
    } 
  }  
  // si no encontramos el valor nos retorna -1
  return -1
}

// let resultadoFor = busquedaFor(personas, 'Pepe')
//  console.log(resultadoFor, 'esto es del for')

 /*
    dentro de una web tenemos un metodo que nos retorna el nombre del usuario
 */

    // array de permisos
    const arrayPermisos = [
      {
        name: "Carlos",
        type: "Admin"
      }, 
      {
        name: "Veronica",
        type: "User"
      }
    ]
    
//  Ejemplo real o del dia a dia
// retorne el tipo de usuario
 const busquedaIndexOf = (array, valor) => {
    // como props  necesito el array de permisos
    // el nombre del usuario
    // una array solo de nombres de personas

    // el Map es la combinacion de guardar elementos que voy iterando dentro de un array
    let arrayPersonas = array.map(user => user.name)

    // buscar el index del elemento que quiero encontrar
    let currentIndexUser = arrayPersonas.indexOf(valor)

    // si encuentra el usuario me retorne el tipo de usuario
    if(currentIndexUser !== -1){
      return array[currentIndexUser].type
    }
    
    if(currentIndexUser === -1){
      return "Este usuario no cuenta con permisos"
    }

    // si no se encuentra me retorne un mensaje de error
 }
let userLogion = "Pepe"
 let resultIndexReal = busquedaIndexOf(arrayPermisos, userLogion)
//  => "user"
 console.log(`El tipo de usuario para ${userLogion} es de ${resultIndexReal} `)



// EJEMPLO DE MAP VS FOR
//  const arrayPermisos = [
//   {
//     name: 'Carlos',
//     type: 'Admin',
//   },
//   {
//     name: 'Veronica',
//     type: 'User',
//   },
// ];

// const resultNombres = arrayPermisos.map((item) => item.name);
// console.log(resultNombres);

// const valoresNombres = [];
// for (let i = 0; i < arrayPermisos.length; i++) {
//   valoresNombres.push(arrayPermisos[i].name);
// }
// console.log(valoresNombres);


