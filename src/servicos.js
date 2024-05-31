/**
 * Especificação das rotas.
 */

// Import das bibliotecas
const express = require('express');

// Import das bibliotecas próprias
const {
    raizes
} = require("./equacaorecurso");

// Inicializa o roteador dos serviços
const router = express.Router();

/**
 * Serviço da rota inicial.
 *
 * curl http://localhost:8000
 */
router.get('/', (request, response)=>{
    response.json({"statusCode": 200,
                   "mensagem": "API Equação segundo grau Rodando"
    })
});

/**
 * Serviço de cálculo das raízes.
 *
 * curl http://localhost:8000/raizes/1/3/-4
 * Resultado x1 = 1 e x2 = -4
 */
router.get('/raizes/:a/:b/:c', raizes);

// Exporta o roteador
module.exports = router;