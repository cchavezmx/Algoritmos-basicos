// Con ayuda de una clase, crea n cantidad de objetos que puedan ser mostrados en el DOM
  // Estos objetos deben representar un usuario
  // todos los usuarios tiene tres características: 
  // una imagen de perfil genérica (misma imagen para todos los usuario), 
  // nombre del usuario nombres distintos
  // descripción genérica (misma descripción para todos los usuarios).

  class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.srcImagen = url_estatica;
        this.descripcion = 'Esto es una descripción';
    }
}

let nombres = ['Ana', 'Julio', 'Carlos', 'Javier', 'Diego', 'Karla', 'César', 'Ximena', 'Mariana'];
