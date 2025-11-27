import client from '../config/db'

export const getAllUsers = async () => {
  return await client.query(`SELECT nome, email, telefone FROM users;`)
}

export const getUser = async (id) => {
  return await client.query(`SELECT * FROM users WHERE id = $1;`, [id])
}

export const createUser =  async (nome, email, senha, telefone) => {
  return await client.query(`INSERT INTO users 
    (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING id, nome, email, telefone;`,
    [nome, email, senha, telefone]
  )
}
export const updateUser = async (id, nome, email, senha, telefone) => { 
  return await client.query(`UPDATE users SET nome = $1,
    email = $2, senha = $3, telefone = $4 WHERE id = $5
    RETURNING id, nome, email, telefone;  
    `, [nome, email, senha, telefone, id])
}
export const deleteUser = async (id) => {
  return await client.query(`DELETE FROM users WHERE id = $1 
    RETURNING id; 
    `, [id])
}