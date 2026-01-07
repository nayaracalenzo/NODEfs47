import prisma from "../config/db.js";

const getAllProducts = async () => {
  return await prisma.products.findMany({
  })
}

const getProduct = async (id) => {
  return await prisma.products.findUnique({
    where: { id: Number(id) }
  })
}

const getProductByCode = async (codigo) => {
  return await prisma.products.findUnique({
    where: { codigo }
  })
}

const createProduct = async (nome, codigo, valor_unitario, categoria_id) => {
  return await prisma.products.create({
    data: { nome,
            codigo,
            valor_unitario: Number(valor_unitario),
            categoria_id: Number(categoria_id)
          },
  })
}
const updateProduct = async (id, nome, codigo, valor_unitario, categoria_id) => {
  return await prisma.products.update({
    where: { id },
    data: { nome, codigo, valor_unitario, categoria_id },
  })
}
const deleteProduct = async (id) => {
  return await prisma.products.delete({
    where: { id },
    select: {
      id: true,
    }
  })
}

export {
  getAllProducts,
  getProduct,
  getProductByCode,
  createProduct,
  updateProduct,
  deleteProduct
}