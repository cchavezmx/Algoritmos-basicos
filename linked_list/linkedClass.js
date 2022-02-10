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
  remove(target){
    // TRIPLE IGUAL
    if (this.head === null) return

    if (this.head.val === target){
      this.head = this.head.next
    } else {
      let current = this.head
      let prevNodo = null
      let nextNodo = null

      while (current.val !== target){
        console.log(current, 'current')
        console.log(prevNodo, 'prevNodo')
        console.log(nextNodo, 'nextNodo')

        prevNodo = current
        nextNodo = current.next
        
        current = current.next
      }     
      prevNodo.next = nextNodo.next      
    }

  }
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

listaEnlazada1.remove('C')
console.log(listaEnlazada1)
