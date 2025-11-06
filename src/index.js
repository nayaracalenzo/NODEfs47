import express from 'express'
import usuariosRoute from './routes/usuariosRoute.js'
import db from './config/db.js'

// app recebe as funcionalidades do express
const app = express()

app.use(express.json())

const port = 3000

// recebe 2 parâmetros - rota e arrow function
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//usar as rotas criadas em usuariosRoute
app.use('/users',usuariosRoute)

// app.listen serve pra escutar o servidor. Recebe 2 parâmetros - porta e arrow function
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`)
})