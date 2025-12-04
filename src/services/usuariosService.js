// camada responsável pela lógica - integridade das regras de negócio 
import * as usuariosRepository from '../repositories/usuariosRepository.js'

export const getAllUsers = async () => {
  return await usuariosRepository.getAllUsers()
}

export const getUser = async (id) => {
  return await usuariosRepository.getUser(id)
}

export const createUser = async (nome, email, senha, telefone) => {
  const usuario = await usuariosRepository.getUserByEmail(email)
  console.log(usuario)
  if (usuario) {
    //throw new Error("Email já cadastrado")
    const error = new Error("Email já cadastrado")
    error.status = 409 //Conflict
    throw error
  }
  console.log("passou da verificação do email")
  const usuarioCriado =  await usuariosRepository.createUser(nome, email, senha, telefone)
  console.log(usuarioCriado)
  return usuarioCriado
}

export const updateUser = async (id, nome, email, senha, telefone) => {
  const usuario = await usuariosRepository.getUser(id)
  if (!usuario) {
    // throw new Error("Usuário não encontrado")
    const error = new Error("Usuário não encontrado")
    error.status = 404
    throw error
  }
  return await usuariosRepository.updateUser(id, nome, email, senha, telefone)
}

export const deleteUser = async (id) => {
  const usuario = await usuarioRepository.getUser(id)
  if (!usuario) {
    const error = new Error("Usuário não encontrado")
    error.status = 404
    throw error
  }
  return await usuariosRepository.deleteUser(id)
}