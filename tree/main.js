console.log('arboles')
class Node {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

  //      a
  //    /   \  
  //   b     c
  //  /  \    \
  // d   e     f

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// TODO Escribe una función, depthFirstValues, 
// que tome la raíz de un árbol binario. 
// La función debe devolver una array que contenga todos los valores del árbol 
// en orden de profundidad. 

// que son los falsy values
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const depthFirstValues = (root) => {
  const stack = [root]
  const values = []
  let counter = 0

  while (stack.length > 0) {
      // guardar en una variable el nodo que extraigo de stack
      const current = stack.pop()
      // actualizo mi counter para efectos de observacion
      ++counter
      console.log(current, counter)
      // guardamos el valor del nodo en el array de values
      values.push(current.val)

      if(current.right) stack.push(current.right)
      if(current.left) stack.push(current.left)
  }

  return values
}

console.log(depthFirstValues(a))

// const nodo = {
//   val: "A",
//   right: "NODO B",
//   left: null
// }
// RECUERDA: que el if verifica que la condicion sea true o false
// true false
// falsys
// if(){
// 	//  si la condicion es verdadera
// } else {
// //   si la condicion es falsa
// }

// console.log(Boolean(nodo.left))