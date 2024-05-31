
// Import das bibliotecas próprias
const EquacaoResultado = require("./equacaoresultado");

/**
 * Classe da Equacao.
 */
class Equacao {

     /**
     * Construtor da classe
     * @param {*} a 
     * @param {*} b 
     * @param {*} c       
     */
     constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    /**
     * Realiza o cálculo do delta.
     * 
     * @returns delta
     */
    getDelta() {
        //Execução do cálculo do delta
        const delta = ((this.b * this.b) - (4 * this.a * this.c));
        //Retorna o delta        
        return delta;
    }

    /**
     * Realiza o cálculo da raiz x1.
     *     
     * @returns x1
     */
    getX1() {
        //Execução do cálculo da raiz x1
        const x1 = ((-this.b + Math.sqrt(this.getDelta(this.a,this.b,this.c))) / (2 * this.a));
        //Retorna a raiz x1        
        return x1;
    }

     /**
     * Realiza o cálculo da raiz x2.
     * 
     * @returns x2
     */
     getX2() {
        //Execução do cálculo da raiz x1
        const x2 = ((-this.b - Math.sqrt(this.getDelta(this.a,this.b,this.c))) / (2 * this.a));
        //Retorna a raiz x2        
        return x2;
    }

    /**
     * Realiza o cálculo das raízes da equação.
     * 
     * @returns equacaoresultado
     */
    getRaizes() {
        //Execução do cálculo do delta
        const delta = this.getDelta(this.a,this.b,this.c);
        //Execução do cálculo da raiz x1
        const x1 = this.getX1(this.a,this.b,this.c);
        //Execução do cálculo da raiz x2
        const x2 = this.getX2(this.a,this.b,this.c);
        //Mensagem de console
        console.log("a = " + this.a + ", b = " + this.b + ", c = " + this.c + ", delta = " + delta + ", x1 = " + x1 + ", x2 = " + x2);
        //Prepara o retorno do serviço
        const equacaoResultado = new EquacaoResultado(this.a, this.b, this.c, delta, x1, x2);
        //Retorna os resultados
        return equacaoResultado;
    }    
}

// Exporta a classe
module.exports = Equacao;