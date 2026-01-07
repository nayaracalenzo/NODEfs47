import * as produtosService from '../services/produtosService.js'

const getAllProducts = async (_req, res) => {
  try {
    const products = await produtosService.getAllProducts()
    return res.status(200).json(products)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: "Erro ao buscar produtos" , error})
  }
}

const getProduct = async (req, res) => {
  const {id} = req.params
  try {
    const product = await produtosService.getProduct(id)
    return res.status(200).json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Erro ao buscar produto", error })
  }
}
const createProduct = async (req, res) => {
  const { nome, codigo, valor_unitario, categoria_id } = req.body
  // try {
    if (!nome || !codigo ||!valor_unitario || !categoria_id) {
      return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }
    const product = await produtosService.createProduct(nome, codigo, valor_unitario, categoria_id)
    return res.status(201).json(product)
  // } catch (error) {
  //   console.error(error)
  //   return res.status(500).json({ message: "Erro ao criar produto", error })
  // }
}
const updateProduct = async (req, res) => {
  const {id} = req.params
  const { nome, codigo, valor_unitario, categoria_id } = req.body
  try {
    if (!nome || !codigo || !valor_unitario || !categoria_id) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" })
    }
    const product = await produtosService.updateProduct(id, nome, codigo, valor_unitario, categoria_id)
    return res.status(200).json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Erro ao alterar produto", error })
  }
}
const deleteProduct = async (req, res) => {
  const {id} = req.params
  try {
    const product = await produtosService.deleteProduct(id)
    return res.status(200).json({product, message: "Produto deletado"})
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Erro ao deletar produto", error })
  }
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}