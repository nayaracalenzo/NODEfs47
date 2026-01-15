import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export const authMiddleware = (req, res, next) => {
  const headerToken = req.headers['authorization']

  const token = headerToken && headerToken.split(' ')[1]
  console.log(token)
  if (token === null) {
    return res.status(401).json({message: "Não autorizado"})
  }

  jwt.verify(token, JWT_SECRET, (error, user)=> {
    console.log("jwt verify:",error, user)
    if (error) {
      return res.status(403).json({ message: "Token inválido"})
    }
    req.user = user
  })
  next()
}