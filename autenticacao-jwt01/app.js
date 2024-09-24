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
  host: 'localhost',  // ou o IP/URL do servidor MySQL
  user: 'gabriel',  // usuário do MySQL
  password: 'Gabriel#12345!',  // senha do MySQL
  database: 'weathermeter'  // nome do banco de dados
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

// Rota principal
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'teste ok ' });
});

// Credenciais (MongoDB ou outras)
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
