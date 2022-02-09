class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  add(dato){
    // crear un nodo con el dato que le estamos pasando por props
    let newNode = new Node(dato)
    if (this.head === null) {
      this.head = newNode

    } else {      
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }
  // remove(datoABorrar)
  // addStart()
  // addBetween()
  // buscar()
  // length()
  // isEmpty()
}

const listaEnlazada1 = new LinkedList()
listaEnlazada1.add('A')
listaEnlazada1.add('B')
listaEnlazada1.add('C')
listaEnlazada1.add('D')
console.log(listaEnlazada1)
