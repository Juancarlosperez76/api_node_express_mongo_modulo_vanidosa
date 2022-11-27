const usuario = require('../models/usuario')

//Método GET: Llamar y mostrar datos
const getUsuario = async (req, res) => {
    const usuarios = await usuario.find() //Consultar todos los registros

    res.json({
        msg: 'Método GET Usuarios',
        usuarios,

    })
}

//Método POST: Enviar datos 
const postUsuario = async (req, res) => {
    //Desesctructuración de parámetros
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena } = req.body
    //Crear el objeto
    const usuario1 = new usuario({ Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena })
    //Guardar datos en MongoDB
    await usuario1.save()

    res.json({
        msg: 'Método POST Usuarios',
        usuario1
    })
}

//Método PUT: Modificación total
const putUsuario = async (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena } = req.body
    //
    const usuario1 = await usuario.findOneAndUpdate({ Documento: Documento }, { Rol :Rol, Nombre: Nombre, Apellidos: Apellidos, TipoDocumento: TipoDocumento, Direccion: Direccion, Telefono: Telefono, Correo: Correo, Contrasena: Contrasena })

    res.json({
        msg: 'Método PUT Usuarios',
        usuario1
    })
}

//Método PATCH: modificación parcial
const patchUsuario = async (req, res) => {
    const { Documento, Nombre } = req.body

    const usuario1 = await usuario.findOneAndUpdate({ Documento: Documento }, { Nombre: Nombre })

    res.json({
        msg: 'Método PATCH Usuarios',
        usuario1
    })
}

//Método DELETE: Eliminar un registro
const deleteUsuario = async (req, res) => {
    const { Documento } = req.query

    //Buscar y borrar
    //Antes de las llaves es el atributo
    const usuario1 = await usuario.findOneAndDelete({ Documento: Documento })

    res.json({
        msg: 'Método DELETE Usuarios',
        usuario1
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    patchUsuario,
    deleteUsuario
}