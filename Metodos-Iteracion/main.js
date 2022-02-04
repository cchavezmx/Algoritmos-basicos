const cats = [
  {
    color: "blue",
    name: "gru"
  },
  {
    color: "red",
    name: "Sanzon"
  },
  {
    color: "red",
    name: "Jerry"
  },
]

cats.find(item => item.color === "red")

cats.filter((item) => {
  return item.color === "red"
})

// true o false
// every revisa si cada uno de los elementos cumple con la funcion
const everyTest = cats.every((item) => {
  return item.name === 'Sanzon'
})

// some revisa si existe algun elemento que cumpla con la funcion
const someTest = cats.some((item) => {
    return item.color === 'blue'
})

console.log(everyTest, someTest)

// metodo REDUCE
// tiene como parametros un acumulador, el valor que se va interando y despues de la funcion una coma que inicializa el accumulador
const gastosSemanal = [100, 200, 1200, 450, 150]
const gasto = gastosSemanal.reduce((acculador, currentValue) => currentValue + acculador, 1000)

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
   [
     [
       {
       queso: "crema"
     }
     ]
   ]
  ]
];

const complex1 = complexArray.map(item => {
  return item.map(item2 => item2)
})
console.log(complex1)
console.log(complex1.flat(Infinity))
