// Con ayuda de una clase, crea n cantidad de objetos que puedan ser mostrados en el DOM
  // Estos objetos deben representar un usuario
  // todos los usuarios tiene tres características: 
  // una imagen de perfil genérica (misma imagen para todos los usuario), 
  // nombre del usuario nombres distintos
  // descripción genérica (misma descripción para todos los usuarios).

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.srcImagen = 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png';
        this.descripcion = 'Esto es una descripción';
    }
}

// FORMA 1 DE CREAR MUCHOS OBJETOS TIPO USUARIO

// let u1 = new Usuario('Erick');
// let u2 = new Usuario('Diego');
// let u3 = new Usuario('Regina');

// let usuarios = [u1, u2, u3];

// console.log(usuarios);

// FORMA 2 DE CREAR MUCHOS OBJETOS TIPO USUARIO

let nombres = ['Ana', 'Julio', 'Carlos', 'Javier', 'Diego', 'Karla', 'César', 'Ximena', 'Mariana'];
// let usuariosObjeto = [];

// for(let i = 0; i < nombres.length; i++) {
//     let usuario = new Usuario(nombres[i]);
//     usuariosObjeto.push(usuario)
// }

// ejemplo con una función
const usuariosObjeto = nombres.map(nombre => new Usuario(nombre));

console.log(usuariosObjeto);

let contenedor = document.getElementById('contenedor');

for(const user of usuariosObjeto) {
    
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let p = document.createElement("p");

    contenedor.append(div);
    div.append(img);
    div.append(h4);
    div.append(p);

    // add class to div container
    div.classList.add('usuario');  

    img.src = user.srcImagen;
    h4.innerText = user.nombre;
    p.innerText = user.descripcion;
}

  // EXTRA
  // con ayuda de un botón se muestra un form (puede ser en un modal o en la misma página) 
  // cono este form, puedes crear un nuevo objeto, mismo que se debe mostrar en el DOM
  // SUPER EXTRA 
  // Con ayuda de un botón en cada card podemos modificar el nombre del usuario, 
  // si consideras que existe otra forma, puedes usar otra cosa en lugar de un botón