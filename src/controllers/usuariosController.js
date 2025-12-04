import * as usuariosService from '../services/usuariosService.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await usuariosService.getAllUsers()
    return res.status(200).json(users)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: "Erro ao buscar usuários", error})
  }
}
export const getUser = async(req, res) => {
  const { id } = req.params
  try {
    const user = await usuariosService.getUser(id)
    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Erro ao buscar um usuário", error })
  }
}
export const createUser = async (req, res) => {
  const {nome, email, senha, telefone} = req.body

  try {
    if (!nome || !email || !senha || !telefone) {
      return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }
    const usuarioCriado = await usuariosService.createUser(nome, email, senha, telefone)
    console.log(usuarioCriado)
    return res.status(201).json(usuarioCriado)
  } catch (error) {
    if (error.status === 409) {
      return res.status(409).json({ message: error.message })
    }
    return res.status(500).json({message: "Erro ao criar usuário", error})
  }
}
export const updateUser = async (req, res) => {
  const {id} = req.params
  const { nome, email, senha, telefone } = req.body

  try {
    // if (!nome || !email || !senha || !telefone) {
    //   return res.status(400).json({ message: "Todos os campos são obrigatórios" })
    // }
    const usuarioAlterado = await usuariosService.updateUser(id, nome, email, senha, telefone)
    return res.status(200).json(usuarioAlterado)
  } catch (error) {
    if (error.status === 404) {
      return res.status(404).json({ message: error.message })
    }
    return res.status(500).json({ message: "Erro ao alterar usuário", error })
  }
}
export const deleteUser = async (req, res) => {
  const {id} = req.params
  try {
    const usuarioDeletado = await usuariosService.deleteUser(id)
    return res.status(200).json(usuarioDeletado)
  } catch (error) {
    if (error.status === 404) {
      return res.status(404).json({message: error.message})
    }
    return res.status(500).json({ message: "Erro ao deletar usuário", error })
  }
}
