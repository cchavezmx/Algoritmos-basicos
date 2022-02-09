// crear un clase llamada Queque
// enqueue agrega elementos a la cola
// dequeue retorna el primer elemento de la cola
// peek
// size
// print

class Queue {
  constructor() {
      this.collection = [];
  }
  enqueue(newItem) { //recibe nuevo elemento y lo añado a la cola (al final)
      return this.collection.push(newItem);
  }

  dequeue() { //eliminar el primer elemento de la cola y lo rotorna
      return this.collection.shift();
  }

  length() { //nos regresa el tamaño de la cola
    // length
    // getter y setter?
    // const nuevo = [1, 2, 3, 4]
    // nuevo.length = 2
    // console.log(nuevo)
      return this.length      
  }

  isEmpty() { //nos regresa una variable booleana de acuerdo a si está o no vacía nuestra cola
      return this.collection.length === 0
  }

  front() { //nos regresa el primer elemento que está en la cola
    // const nuevo = [1, 2, 3, 4, 5]
    // const [primerElemento] = nuevo
    // console.log(primerElemento)
    
      return this.collection[0]
  }
}