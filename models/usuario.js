const { Schema, model } = require('mongoose')

//Definir la extructura de la colección
const usuarioSchema = Schema({
    
    Rol: {
        type: String
    },

    Nombre: {
        type: String
    },

    Apellidos: {
        type: String
    },

    TipoDocumento: {
        type: String
    },

    Documento: {
        type: Number
    },

    Direccion: {
        type: String
    },

    Telefono: {
        type: Number
    },

    Correo: {
        type: String
    },

    Contrasena: {
        type: String
    }

})

module.exports = model('usuario', usuarioSchema)
