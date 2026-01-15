import express from 'express'
import * as produtosController from '../controllers/produtosController.js'

const router = express.Router()

router.get('/', authMiddleware, produtosController.getAllProducts)
router.get('/:id', produtosController.getProduct)
router.post('/', produtosController.createProduct)
router.put('/:id', produtosController.updateProduct)
router.delete('/:id', produtosController.deleteProduct)

export default router