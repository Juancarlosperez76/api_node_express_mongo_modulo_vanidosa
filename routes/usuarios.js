

const {Router}= require('express')
//Obtener la función Router
const router = Router()

const { getUsuario, postUsuario, putUsuario, patchUsuario, deleteUsuario } = require('../controllers/usuario')

router.get('/', getUsuario,)

router.post('/', postUsuario)

router.put('/', putUsuario)

router.patch('/', patchUsuario)

router.delete('/', deleteUsuario)

//exportar módulo
module.exports = router


