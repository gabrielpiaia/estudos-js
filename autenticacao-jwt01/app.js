/* imports */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');  // Mantém apenas uma declaração

const app = express();

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: '${dbUHost}',  // ou o IP/URL do servidor MySQL
  user: '${dbUser}',  // usuário do MySQL
  password: '${dbPassword}',  // senha do MySQL
  database: '${dbDatabase}'  // nome do banco de dados
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

// rota teste
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'teste ok ' });
});

// Credenciais 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbdbDatabase = process.env.DB_DATABASE;

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
