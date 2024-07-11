# Programa servidor API-REST de cálculo de equação do segundo grau utilizando Node.js no Vercel.

##  Descrição

- O projeto foi desenvolvido no VSCode deve ser chamado "equacaosegundograu_nodejs_vercel".
- Programa cliente está no projeto "equacaosegundograu_reactjs_vercel".
- Programa servidor cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e o método GET.
- Classe equação executa o cálculo das raízes da equação do segundo grau utilizando a fórmula de Bháskara.

## Dependências
- express,
- cors.

## Execução

   <pre><code>npm start</code></pre>
   
## Atualização

   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre> 
   
## Arquivos fontes do projeto em src

- index.js - Programa principal com o servidor Express.
- equacao.js - Contêm a classe da equação.
- equacaoaresultado.js - Contêm a classe de retorno ddas operações da equação.
- equacaorecurso.js - Contêm os métodos de acesso aos recursos da equação.
- servicos.js - Contêm as rotas aos métodos de acesso a equação.

## Vercel  

    https://equacaosegundograu-nodejs-vercel.vercel.app/

## Serviços
    Substitua localhost:8080 pelo endereço do servidor.

 - Serviço da rota inicial VIA GET.
    http://localhost:8000        

 - Serviço de cálculo das raízes via GET.
    substitua \<VALORA\>, \<VALORB\> \<VALORC\> e pelos valores dos coeficientes da equação.<br>
    http://localhost:8000/raizes/<VALORA>/<VALORB>/<VALORC>    