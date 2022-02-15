// CREAR UNA CLASE LLAMADA TREE QUE CREE ARBOLES BINARIOS
// la clase debe tener un metodo add, contiene
// metodo add => llenaria el arbol binario
// metodo contine => Verifica si un dato existe dentro de mi arbol y retorna un mensaje

// reglas
// esta clase solo acepta numeros
// los numeros menores se acomoda a la izquieda 
// los numeros mayores a la derecha

// target es el valor que quiero buscar
class Node{
  constructor(value, left, right){
    this.value = value
    this.left = left
    this.right = right
  }
}



class Tree{
  constructor(){
    this.root = null
  }
  add(newValue){
    //TODO solo permitir numeros
    if(typeof newValue !== 'number'){
      alert('solo se permiten numeros')
    }
    //TODO los numeros no deben repetirse

    // crear un nodo
    let newNode = new Node(newValue, null, null)

    // saber si ya existe un nodo en la raiz
    if (this.root === null){
      return this.root = newNode
    }

    // tratar de que cada linea de nuestro codigo haga una operacion a la vez
    let current = this.root
    let stop = true

    while(stop){
      if (current.value > newValue){
        // como el valor es menor lo tenemos que acomodar a la izqueda
        if (current.left !== null){
          // si ya esta ocupado
          current = current.left
        } else {
          current.left = newNode
          stop = false
        }

      } else {
        // inspeccionar a la derecha
        if (current.value < newValue){
          //
          if (current.right !== null){
            current = current.right
          } else {
            current.right = newNode
            stop = false
          }
        }
      }
    }

  }
  // contain(target)
}

const arbol = new Tree()
console.log(arbol, '1')
arbol.add(40)
console.log(arbol, '2')
arbol.add(60)
console.log(arbol, '3')
arbol.add(30)
console.log(arbol, '4')
arbol.add(20)
console.log(arbol, '5')
arbol.add(70)
console.log(arbol, '6')

