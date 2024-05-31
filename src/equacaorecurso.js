/**
 * Métodos de acesso aos recursos da equação
 */

// Import das bibliotecas próprias
const Equacao = require("./equacao");

// Serviço das raízes.
const raizes = async (request, response) => {   
   
    console.log("Executando serviço cálculo das raízes.");

    //Recupera os parâmetros
    const a = parseFloat(request.params.a);
    const b = parseFloat(request.params.b);
    const c = parseFloat(request.params.c);

    //Instancia a equação
    const equacao = new Equacao(a,b,c);
        
    //Recupera o objeto de resultado
    const equacaoResultado = equacao.getRaizes();

    response.status(200).json(equacaoResultado);  
};

// Exporta as funções
module.exports = {    
    raizes
};