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
const g = new Node('G')
const h = new Node('H')
const i = new Node('I')
const j = new Node('J')


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

      // inspeccionamos que si current tienen mas nodos nodos a la izquieda o a la derecha
      if(current.right) stack.push(current.right)
      if(current.left) stack.push(current.left)
  }
  return values
}

console.log(depthFirstValues(a))
//  ['A', 'B', 'D', 'E', 'C', 'F']


// TODO Escriba una función, breadthFirstValues
// que tome la raíz de un árbol binario. 
// La función debe devolver una matriz que contenga todos los valores del árbol en orden de aparicion. 
const breadthFirstValues = () => {

}
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

// TODO problema 3 suma del arbol
// Crear una funcion que se llame treeSum, que tome el valor de un arbol
// y sume los valores que vaya encontrando

// const num1 = new Node(3);
// const num2 = new Node(11);
// const num3 = new Node(4);
// const num4 = new Node(4);
// const num5 = new Node(-2);
// const num6 = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// treeSum(a); // -> 21



// NOTAS //

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



