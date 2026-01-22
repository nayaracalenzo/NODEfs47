import express from 'express'
import * as usuariosController from '../controllers/usuariosController.js'
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()
router.get('/', usuariosController.getAllUsers)
router.get('/:id', usuariosController.getUser)
router.put('/:id', authMiddleware, usuariosController.updateUser)
router.delete('/:id', authMiddleware, usuariosController.deleteUser)

export default router
// forma antiga de exportar - module.exports = router
