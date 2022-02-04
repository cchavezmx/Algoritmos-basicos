console.log("STACK")

// Clase Pila
// métodos: 
// push
// pop
// peek
// length

class Stack {
  constructor(){
    this.count = 0
    this.storage = {}
  }

  push(newElemento){

    // alamacenar el nuevo elemento
      this.storage[this.count] = newElemento
    // incrementar el contador
      this.count++
  }

  pop(){    
    // mostar el ultimo elemento que se quito
    let ultimoElemento = this.storage[this.count - 1]
    // Quitar el ultimo elemento del storaga
    delete(this.storage[this.count - 1])
    // diminuir el contador
    this.count--

    return ultimoElemento

  }

  length(){
    return this.count
  }

  peek(){
    // retorna el ultimo elemento insertado
    return this.storage[this.count - 1]
  } 

}

// instancia de una clase 
let arrayX = new Stack()
arrayX.push("Carlos")


arrayX.push("Juan")
arrayX.push("Pedro")
arrayX.push("Angel")
arrayX.pop()

console.log(arrayX.length())
console.log(arrayX.peek())
console.log(arrayX)

// notas
// let test = {
//   nombre: "carlos",
//   ciudad: "Mexico",
// }

// accedemos
// console.log(test.nombre)
// test.nombre = "Ana"
// console.log(test)
// // crear una nueva propiedad?

// test["mascota"] = "Chetos!!"
// console.log(test)
// // **cuidado con usarlo
// delete test["ciudad"]

// console.log(test)