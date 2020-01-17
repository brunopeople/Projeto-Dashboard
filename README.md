# Dashboard

Este projeto foi gerado pelo Framework Javascript [Angular CLI](https://github.com/angular/angular-cli) na sua versão em 8.3.8.

## Instalação do Angular CLI

Para a instalação do angular é preciso primeiro 

## Rodando o Servidor

Para que a aplicação Rode é preciso primeiramente ter instalado o Node.js, após sua instalação digite no seu prompt de comando ng serve -o, com isto a aplicação vai criar um servidor host localhost:4200//. 

## Instalação 

Após instalar o Node.js, rode o seu prompt e digite o comando npm install -g @angular/cli

## Build

Para realizar o build do projeto, rode o comando 'ng build'. O artefato será do projeto será arquivado no diretório 'dist/'. Para sinalizar que a aplicação é feita para produção use o '--prod'.

## Observações

# A aplicação tem um Delay de um segundo para rodar, isto se dá pelo fato que está sendo feito uma requisição na APi do Google para que faça a geração dos gráficos. É Recomendavel roda a aplicação com o console.log do Chrome habilitado e reinicilizar o navegador. 

# É bem provável que ao rodar a aplicação que ocorra um erro onde o angular não encontre o módulo @angular-devkit/angular-build, este erro ocorre na versão 6.0 do angular, basta apenas rodar os seguintes comandos.

'npm install'
'ng update'
'npm update'

ou se a versão do angular for a 6.0 basta apenas rodar o comando 'npm install --save-dev @angular-devikit/angular-build'.




## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
