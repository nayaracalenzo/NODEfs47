import * as authService from '../services/authService.js'

const register = async (req, res) => {
  const {nome, email, senha, telefone} = req.body

  try {
    if (!nome || !email || !senha ) {
      return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }
    const usuarioCriado = await authService.createUser(nome, email, senha, telefone)
    console.log(usuarioCriado)
    return res.status(201).json(usuarioCriado)
  } catch (error) {
    if (error.status === 409) {
      return res.status(409).json({ message: error.message })
    }
    return res.status(500).json({message: "Erro ao criar usuário", error})
  }
}

const login = async (req, res) => {
  const {email, senha} = req.body
  console.log(email, senha)
  try {
    const response = await authService.loginUsuario(email, senha)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
} 

export {register, login}