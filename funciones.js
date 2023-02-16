const guardarContacto = (localData, contacto) => {
    localData.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}

const cargarContactos = (localData, parentNode) => {
    let claves = Object.keys(localData)
    for (claves of claves) {
        let contacto = JSON.parse(localData.getItem(claves))
        crearContacto(parentNode, contacto, localData)
    }

}

const crearContacto = (parentNode, contacto, localData) => {

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let telefonoContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('i')
    let iconoEditar = document.createElement('i')

    nombreContacto.innerHTML = contacto.nombre
    telefonoContacto.innerHTML = contacto.telefono
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = ''
    iconoEditar.innerHTML = ''

    divContacto.classList.add('tareas')
    iconoBorrar.classList.add('fa-solid', 'fa-trash', 'icono')
    iconoEditar.classList.add('icono-edit')

    iconoBorrar.onclick = () => {
        localData.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)
    divContacto.appendChild(iconoEditar)

    parentNode.appendChild(divContacto)



}