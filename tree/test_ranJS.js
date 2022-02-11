// para ver como itera el ciclo while
const root = {
  val: 'A',
  left: 'Nodo B',
  rigth: 'Nodo C'
}

let stack = [root]
let values = []

// primera iteracion!!!!!
// GUARDAR EN CURRENT EL VALOR QUE VOY SACANDO DE STACK
// 
let current = stack.pop()
console.log(stack)
// guardar el valor en el array de valores
values.push(current.val)

console.log(values, 'valores')
console.log(stack, 'stack')

// tienes valores a la derecha
if (current.rigth) stack.push(current.rigth)

// tienes valores a la izquierda
if (current.left) stack.push(current.left)

console.log(values, 'valores', 'primera iteracion')
console.log(stack, 'stack')

// segunda iteracion
//1- guardar en una variable el valor que estoy examinando
let current_segunda_interacion = stack.pop()
console.log(current_segunda_interacion)

// 2 - guardar el valor del nodo current en el array de valores
// el valor de B
values.push("B")

// tienes valores a la derecha
stack.push("Nodo E")

// tienes valores a la izquierda
stack.push("Nodo D")

// final de el ciclo while
console.log(values, 'valores', 'segunda iteracion')
console.log(stack, 'stack')