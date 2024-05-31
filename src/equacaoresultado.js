/**
 * Classe que representa o resultado da equação do segundo grau
 */
class EquacaoResultado {

    /**
     * Construtor da classe
     */
    constructor(a, b, c, delta, x1, x2) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
        this.x1 = x1;
        this.x2 = x2;
    }
}

// Exporta a classe
module.exports = EquacaoResultado;