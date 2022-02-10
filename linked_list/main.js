
// NODE
class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

//   A => B => C => D
// HEAD

a.next = b
b.next = c
c.next = d

// console.log(a)
// FUNCION QUE IMPRIMA LOS VALORES DE LOS NODOS
// TIENE QUE RECIBIR SOLO LA CABEZERA (HEAD)
// iterativa => for, map, inspeccionar cada element uno a uno

// de forma interativa
// const printNodes = (head) => {
//     let current = head 
//     // A => C => D =>
//     while(current !== null){
//         console.log(current.val)
//         current = current.next
//       }
//     }
    
// funcion recursiva => crear algun condicional que frene la funcion principal
// DE FORMA RECURSIVA
// const printNodes = (head) => {
//   if (head === null) return
//     console.log(head.val, 'forma recursiva')
//     printNodes(head.next)
// }

// printNodes(a)

// Escribe un funcion llamada linkedListValues, 
// que reciba la cabeza de una lista enlazada
// y regrese un array con los valores de los nodos de la lista.
const linkedListValues = (head) => {
  let current = head
  let valores = []
  while(current !== null){
    valores.push(current.val)
    current = current.next
  }
  return valores
}

// console.log(linkedListValues(a))
// Crear una funcion llamada linkedListFind 
// que tome head de una lista enlazada y un valor y retorne
// si el valor pertenece a la lista o no.

const linkedListFind = (head, val) => {
  let current = head
  while (current !== null) {
    if(current.val === val) return true
    current = current.next
  }
  return false
}

// console.log(linkedListFind(a, "F"))

// PROBLEMA 3 PARA HACER EN CLASE
// crear una lista de nodos de numeros
// 
const number1 = new Node(1)
const number2 = new Node(22)
const number3 = new Node(-3)
const number4 = new Node(40)
const number5 = new Node(5)

// enlace de nodos
number1.next = number2
number2.next = number3
number3.next = number4
number4.next = number5

// crea una funcion llamada sumaList, 
// que tome el head de una lista enlzada  y que sume todo los valores de los nodos

const sumaList = (head) => {
  let current = head
  let suma = 0
  while(current !== null){    
 // suma = suma + current.val
    suma += current.val
    current = current.next
  }
  
  return suma
}

// console.log(sumaList(number1))
//   A => B => C => D
// hacer una funcion que tome el head de una lista enlazada
// me cambie los valores (como lo haria el metodo Array.prototype.reverse)


// https://drive.google.com/file/d/1GGpczwg0vhSRptSmFJWZaVTjPZrt_qhf/view?usp=sharing
const reverseList = (head) => {
  let current = head
  let prev = null

  while (current !== null) {
    // copiar el valor del next para no peder el enlace con los demas nodos de la lista
    let next = current.next

    // le asignamos en nuevo enlace que guardamos previamente
    //  al nodo que estamos examinando (current)
    current.next = prev

    // asignamos el valor de current a la variable de prev 
    // para ocuparlo en la siguiente iteracion
    // VALOR PREV GLOBAL
    prev = current
    
    // pasamos al siguiente nodo. previamente guardado en next
    // VALOR CURRENT GLOBAL
    current = next    
  }
  return prev
}

reverseList(a)
// D => C => B => A















