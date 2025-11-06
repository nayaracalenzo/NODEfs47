import {Client} from 'pg'
import dotenv from 'dotenv'
dotenv.config();

const client = new Client ({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

client.connect().then(async () => {
  console.log("Banco Conectado");
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      senha VARCHAR(100) NOT NULL,
      telefone VARCHAR(11)
    );
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(50) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      codigo VARCHAR(10) UNIQUE NOT NULL,
      valor_unitario DECIMAL(6,2) NOT NULL,
      categoria_id INT REFERENCES categories(id)
    );
    `)
    console.log("As tabelas foram criadas") 
  }).catch((error)=> {
    console.log("Erro ao criar tabelas", error);
  })


export default client