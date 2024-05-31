/**
 * Aplicação principal da Equação do segundo grau.
 */

// Import das bibliotecas
const express = require('express');
const cors = require('cors');

// Inicializa o servidor
const app = express();
// Define a porta do servidor
const port = 8000;

// Middleware para analisar o corpo da solicitação
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
  
// Rota dos serviços da Equação do segundo grau
const rotas = require("./servicos");
// Carrega os serviços
app.use(rotas);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo porta ${port}`);
});