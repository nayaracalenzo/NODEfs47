import prisma from "../config/db.js";

export const getAllUsers = async () => {
  // const result = await client.query(`SELECT nome, email, telefone FROM users;`)
  // return result.rows
  return await prisma.users.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
    }
  })
}

export const getUser = async (id) => {
  // const result = await client.query(`SELECT * FROM users WHERE id = $1;`, [id])
  // return result.rows[0]
  return await prisma.users.findUnique({
    where: { id : Number(id)}
  })
}

export const getUserByEmail = async (email) => {
  // const result = await client.query(`SELECT * FROM users WHERE email = $1;`, [email])
  // return result.rows[0]
  return await prisma.users.findUnique({
    where: { email }
  })
}

export const createUser =  async (nome, email, senha, telefone) => {
  // const result = await client.query(`INSERT INTO users 
  //   (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING id, nome, email, telefone;`,
  //   [nome, email, senha, telefone]
  // )
  // return result.rows
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
export const updateUser = async (id, nome, email, senha, telefone) => { 
  // const result = await client.query(`UPDATE users SET nome = $1,
  //   email = $2, senha = $3, telefone = $4 WHERE id = $5
  //   RETURNING id, nome, email, telefone;  
  //   `, [nome, email, senha, telefone, id])
  // return result.rows
  return await prisma.users.update({
    where: {id},
    data: { nome, email, senha, telefone },
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true
    }
  })
}
export const deleteUser = async (id) => {
  // const result = await client.query(`DELETE FROM users WHERE id = $1 
  //   RETURNING id; 
  //   `, [id])
  // return result.rows
  return await prisma.users.delete({
    where: { id },
    select: {
      id: true,
    }
  })
}