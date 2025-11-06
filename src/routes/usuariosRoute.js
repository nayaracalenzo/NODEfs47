import express from 'express'
import * as usuariosController from '../controllers/usuariosController.js'

const router = express.Router()

router.get('/', usuariosController.getAllUsers)
// rota para buscar um usuário: '/users/1'
router.get('/:id', usuariosController.getUser)
router.post('/', usuariosController.createUser)
router.put('/:id', usuariosController.updateUser)
router.delete('/:id', usuariosController.deleteUser)

export default router
// forma antiga de exportar - module.exports = router