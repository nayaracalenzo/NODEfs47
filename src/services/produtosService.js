
import * as produtosRepository from '../repositories/produtosRepository.js'

const getAllProducts = async () => {
  return await produtosRepository.getAllProducts()
}

const getProduct = async (id) => {
  return await produtosRepository.getProduct(id)
}

const createProduct = async (nome, codigo, valor_unitario, categoria_id) => {
  const produto = await produtosRepository.getProductByCode(codigo)
  console.log(produto)
  if (produto) {
    const error = new Error("Código já cadastrado")
    error.status = 409 //Conflict
    throw error
  }
  console.log("passou da verificação do código")
  const produtoCriado = await produtosRepository.createProduct(nome, codigo, valor_unitario, categoria_id)
  console.log(produtoCriado)
  return produtoCriado
}

const updateProduct = async (id, nome, codigo, valor_unitario, categoria_id) => {
  const produto = await produtosRepository.getProduct(id)
  if (!produto) {
    const error = new Error("Produto não encontrado")
    error.status = 404
    throw error
  }
  return await produtosRepository.updateProduct(id, nome, codigo, valor_unitario, categoria_id)
}

const deleteProduct = async (id) => {
  const produto = await produtosRepository.getProduct(id)
  if (!produto) {
    const error = new Error("Produto não encontrado")
    error.status = 404
    throw error
  }
  return await produtosRepository.deleteProduct(id)
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}