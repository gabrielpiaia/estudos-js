require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Credenciais do banco de dados
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

// Configurando Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // versão do OpenAPI
    info: {
      title: 'API de Autenticação',
      version: '1.0.0',
      description: 'Documentação da API de autenticação usando JWT e MySQL',
    },
  },
  apis: ['./app.js'], // caminho para os arquivos que contêm a documentação
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware de verificação de token
function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado!' });
  }

  try {
    const secret = process.env.JWT_SECRET;
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).json({ msg: 'Token inválido!' });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(400).json({ msg: 'Token inválido!' });
  }
}

// Rota teste
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Teste OK' });
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmpassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       422:
 *         description: Erro de validação
 *       500:
 *         description: Erro ao registrar usuário
 */
// Rota para registro de usuário
app.post('/auth/register', async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // Validações
  if (!name) {
      return res.status(422).json({ msg: "Informar nome" });
  }
  if (!email) {
      return res.status(422).json({ msg: "Informar email" });
  }
  if (!password) {
      return res.status(422).json({ msg: "Informar senha" });
  }
  if (password !== confirmpassword) {
      return res.status(422).json({ msg: "As senhas não coincidem" });
  }

  // Criar senha criptografada
  try {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      // Inserir no banco de dados com senha criptografada
      const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
      connection.query(query, [name, email, passwordHash], (err, result) => {
          if (err) {
              return res.status(500).json({ msg: 'Erro ao registrar usuário', error: err.message });
          }
          res.status(201).json({ msg: 'Usuário registrado com sucesso!' });
      });
  } catch (error) {
      res.status(500).json({ msg: 'Erro ao criptografar a senha', error: error.message });
  }
});

/**
* @swagger
* /auth/register:
*   post:
*     summary: Registrar um novo usuário
*     tags: [Usuários]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               email:
*                 type: string
*               password:
*                 type: string
*               confirmpassword:
*                 type: string
*     responses:
*       201:
*         description: Usuário registrado com sucesso
*       422:
*         description: Erro de validação
*       500:
*         description: Erro ao registrar usuário
*/
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "Informar email" });
  }
  if (!password) {
    return res.status(422).json({ msg: "Informar senha" });
  }

  // Verificar se o usuário existe
  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ msg: 'Erro ao buscar usuário', error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    const user = results[0];

    // Comparar a senha fornecida com a senha criptografada no banco de dados
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida!" });
    }

    try {
      // Gerar token JWT
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

      res.status(200).json({ msg: "Autenticação bem-sucedida!", token });
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao gerar token', error: error.message });
    }
  });
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Obter detalhes do usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao buscar usuário
 */
app.get("/user/:id", checkToken, (req, res) => {
  const id = req.params.id;

  // Consulta SQL para buscar o usuário sem o campo `password`
  const query = 'SELECT id, name, email FROM users WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ msg: 'Erro ao buscar usuário', error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
    res.status(200).json({ user: results[0] });
  });
});

// Iniciar o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
