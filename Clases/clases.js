// console.log("CLASES");

// // clase es una plantilla o molde

// class Alumno {
//     // solo podemos tener un contructor
//     // incializar viariables vienen del exterior
//   constructor(nombre, edad, turno){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.turno = turno
//   }
//   // hacer la funcion del metodo de materias
//   // al pasarle una materia la guarden en el array
//   // nos retorne el array de material
//   materias(materia) {
//     this.materia = materia;
//     return [materia];
//   }


//   promedio() {    
//     return 8
//   }
// }

// let alumi2 = new Alumno("saul", "16", "vespertino")
// // console.log(alumi2)

// alumi2.materias("español")
// console.log(alumi2.materias("Mate"))

// SUPER CLASE  => CLASE PRINCIPAL
class Persona {
  constructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  saludar () {
    console.log("hola soy una super clase")
  }
}

// subclase 
class Alumno extends Persona {
  constructor(nombre, apellido, edad, calificacion) {
    super(nombre, apellido, edad)
      this.calificacion = calificacion
  }

  reprobado() {
    if (this.calificacion < 5){
      console.log("Reprobado")
    } else {
      console.log(`Usted ${this.nombre} esta Aprobado`)
    }
  }
}

// RETO: Crear las clases aparitr de los datos de un array y un objecto
// apartir de los datos de un array
let alumnos = ["carlos", "luis", "Jose", "Alberto"]

// apartir de un objeto
let alumnosObjec = [
  {
    nombre: "carlos", 
    apellido: "chavez",
    edad: 30,
    calificacion: 4
  },
  {
    nombre: "Luis", 
    apellido: "Alvarado",
    edad: 40,
    calificacion: 10
  },
  {
    nombre: "Jose", 
    apellido: "Cuervo",
    edad: 38,
    calificacion: 10
  },
  {
    nombre: "Alberto", 
    apellido: "Chavez",
    edad: 16,
    calificacion: 10
  },
]

let subAlumno = new Alumno("carlos")
let subAlumno1 = new Alumno("luis")

console.log(subAlumno, subAlumno1)




























