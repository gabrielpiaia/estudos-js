/* imports */
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();

// Credenciais 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: dbHost,  // ou o IP/URL do servidor MySQL
  user: dbUser,  // usuário do MySQL
  password: dbPassword,  // senha do MySQL
  database: dbDatabase  // nome do banco de dados
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

// Exportar a conexão para ser usada em outros arquivos, se necessário
module.exports = connection;

// Rota teste
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'teste ok' });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});