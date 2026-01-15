import express from 'express'
import usuariosRoute from './routes/usuariosRoute.js'
import produtosRoute from './routes/produtosRoute.js'
import authRoute from './routes/authRoute.js'
import { authMiddleware } from "./middleware/authMiddleware.js"
import cors from "cors"

// app recebe as funcionalidades do express
const app = express()

app.use(express.json())

const port = 3000

app.use(cors({
  origin: "http://localhost:5173"
}))

// recebe 2 parâmetros - rota e arrow function
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth',authRoute)
app.use('/users', usuariosRoute)
app.use('/products', authMiddleware, produtosRoute)

// app.listen serve pra escutar o servidor. Recebe 2 parâmetros - porta e arrow function
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`)
})