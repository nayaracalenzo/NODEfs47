/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Registro e autenticação de usuários
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *             example:
 *               nome: "João Silva"
 *               email: "joao@email.com"
 *               senha: "123456"
 *               telefone: "11999999999"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 id: "123"
 *                 nome: "João Silva"
 *                 email: "joao@email.com"
 *                 telefone: "11999999999"
 *       400:
 *         description: Campos obrigatórios não informados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: "Todos os campos são obrigatórios"
 *       409:
 *         description: Usuário já existente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: "Email já cadastrado"
 *       500:
 *         description: Erro ao criar usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: "Erro ao criar usuário"
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica um usuário
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             example:
 *               email: "joao@email.com"
 *               senha: "123456"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 user:
 *                   id: "123"
 *                   nome: "João Silva"
 *                   email: "joao@email.com"
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credenciais inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: "Email ou senha inválidos"
 *       500:
 *         description: Erro ao realizar login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 error: "Erro interno do servidor"
 */
