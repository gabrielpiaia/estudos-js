// app.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('./swagger'); // Importando o swagger.js

const app = express();
const port = 3001; // Porta para a API

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

// Usar o Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

// Rota teste
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Teste OK' });
});

// Rota para registro de usuário
app.post('/auth/register', async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // Validações
  if (!name) return res.status(422).json({ msg: "Informar nome" });
  if (!email) return res.status(422).json({ msg: "Informar email" });
  if (!password) return res.status(422).json({ msg: "Informar senha" });
  if (password !== confirmpassword) return res.status(422).json({ msg: "As senhas não coincidem" });

  // Criar senha criptografada
  try {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Inserir no banco de dados com senha criptografada
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    connection.query(query, [name, email, passwordHash], (err) => {
      if (err) return res.status(500).json({ msg: 'Erro ao registrar usuário', error: err.message });
      res.status(201).json({ msg: 'Usuário registrado com sucesso!' });
    });
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao criptografar a senha', error: error.message });
  }
});

// Rota para login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(422).json({ msg: "Informar email" });
  if (!password) return res.status(422).json({ msg: "Informar senha" });

  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ msg: 'Erro ao buscar usuário', error: err.message });
    if (results.length === 0) return res.status(404).json({ msg: "Usuário não encontrado!" });

    const user = results[0];
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) return res.status(422).json({ msg: "Senha inválida!" });

    // Gerar token JWT
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
    res.status(200).json({ msg: "Autenticação bem-sucedida!", token });
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor API rodando na porta ${port}`);
});
