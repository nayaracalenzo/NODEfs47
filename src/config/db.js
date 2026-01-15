import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default prisma

async function testConnection() {
  try {
    await prisma.$connect()
    console.log("Conexão com o banco estabelecida")
  } catch (error) {
    console.error("Erro ao conectar ao banco", error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()


// model users {
//   id       Int @id @default (autoincrement())
//   nome     String @db.VarChar(50)
//   email    String @db.VarChar(50) @unique
//   senha    String @db.VarChar(100)
//   telefone String ? @db.VarChar(11)
// }

// model categories {
//   id   Int @id @default (autoincrement())
//   nome String @db.VarChar(50)
//   products   products[]
// }

// model products {
//   id             Int @id @default (autoincrement()) 
//   nome           String @db.VarChar(50)
//   codigo         String @db.VarChar(10) @unique
//   valor_unitario Decimal @db.Decimal(6, 2)
//   categoria_id   Int 
//   categoria      categories @relation(fields: [categoria_id], references: [id])
// }