const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const ciudad = document.querySelector('.ciudad')
const agregar = document.querySelector('.btn-add')

const listaTareas = document.querySelector('.lista-tareas')

const localData = window.localStorage

agregar.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
        ciudad: ciudad.value,
    }
    guardarContacto(localData, contacto)
}

cargarContactos(localData, listaTareas)