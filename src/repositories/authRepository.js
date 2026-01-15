import prisma from '../config/db.js'

export const createUser = async (nome, email, senha, telefone) => {
  return await prisma.users.create({
    data: { nome, email, senha, telefone },
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true
    }
  })
}