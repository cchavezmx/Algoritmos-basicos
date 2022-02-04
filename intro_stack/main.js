console.log("PILAS - STACK")

// const pila = []

// pila.push("Elemento 1")

// console.log(pila)

// pila.push("Elemento 2")

// console.log(pila)

// console.log(pila.pop())

// console.log(pila)

// pila.push("Elemento 3")

// console.log(pila)

// Ingrese una palabra - PRUEBA TECNICA DE ENTREVISTA
// SPLIT, REVERSE 
// Con ayuda de pop, ordenemos la palabra alravés en una nueva variable
// EXTRA comparar 

//  Algoritmo a seguir *** 

// convertir el string a un array (sin usar split)
// voltear el array que cree 

// EXTRA COMPRAR si los dos arrays son iguales

const palabra = "perro"
const palindromoCheck = (palidromo) => {

  let arrayPalabras = []

    for (letra of palidromo){
      console.log(letra)
      arrayPalabras.push(letra)
    }
    console.log(arrayPalabras)

  let arrayPalabrasAlreves = []

    for (letra of palidromo){
      arrayPalabrasAlreves.push(arrayPalabras.pop())
    }

    console.log(arrayPalabrasAlreves)
    console.log(arrayPalabras)

    return arrayPalabras
}

palindromoCheck("ana")


