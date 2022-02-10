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

console.log(a)