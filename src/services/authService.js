import * as authRepository from '../repositories/authRepository.js'
import * as usuariosRepository from '../repositories/usuariosRepository.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS) 
const JWT_SECRET = process.env.JWT_SECRET


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
  const senhaCriptografada = await bcrypt.hash(senha, BCRYPT_ROUNDS)
  console.log(senhaCriptografada)
  const usuarioCriado =  await authRepository.createUser(nome, email, senhaCriptografada, telefone)
  console.log(usuarioCriado)
  return usuarioCriado
}

export const loginUsuario = async (email, senha) => {
  const usuario = await usuariosRepository.getUserByEmail(email)
  if (!usuario) {
    const error = new Error("Email ou senha incorretos")
    error.status = 401
    throw error
  }
  console.log(senha, usuario.senha);
  const senhaValida = await bcrypt.compare(senha, usuario.senha)
  
  if (!senhaValida) {
    const error = new Error("Email ou senha incorretos")
    error.status = 401
    throw error
  }

  // payload, secret key, expira
  const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {expiresIn: '1d'})

  return {
    token, 
    user: {
      id: usuario.id,
      email: usuario.email,
    }
  }
}

