<a name="readme-top"></a>

# Bem vindo(a) ao repositório do Bem Gelada! :beer:

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li>
          <a href="#fluxos">Fluxos</a>
          <ul>
            <li><a href="#comum">Comum</a></li>
            <li><a href="#cliente">Cliente</a></li>
            <li><a href="#vendedor">Vendedor</a></li>
            <li><a href="#administrador">Administrador</a></li>
          </ul>
        </li>
        <li>
          <a href="#dados-dos-usuários">Dados dos usuários</a>
        </li>
        <li>
          <a href="#tecnologias">Tecnologias</a>
          <ul>
            <li><a href="#front-end">Front-end</a></li>
            <li><a href="#back-end">Back-end</a></li>
            <li><a href="#banco-de-dados">Banco de dados</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-a-aplicação">Iniciando aplicação</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#rotas">Rotas</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- SOBRE O PROJETO -->
## Sobre o projeto

<p align="justify">
Este projeto finalizou o módulo de Back-end no curso de Desenvolvimento Web da Trybe. A aplicação foi desenvolvida em um grupo formado por 05 integrantes, simulando um ambiente real de desenvolvimento em equipe. Foi uma experiência muito rica, tanto em termos de praticar o conteúdo técnico, quanto de troca de aprendizados entre os integrantes e desenvolvimento de habilidades interpessoais. Cooperação, comunicação, ensinar e aprender foram pontos bastante exercitados pela equipe.
</p>
<p align="justify">
<strong><i>Bem Gelada</i></strong> é uma aplicação completa que integra Front-end, Back-end e um banco de dados MySQL. Trata-se de uma <b>aplicação para gerenciar um sistema de delivery de bebidas</b>. Existem três tipos de usuários: <strong>clientes, vendedores e administradores</strong>. 

  <ol>
    <li><strong>O usuário cliente</strong> tem a capacidade de realizar a compra de itens contidos na lista de produtos e mudar o status do pedido para <b><i>recebido</i></b>.</li>
    <li><strong>O usuário vendedor</strong> pode  <b><i>aprovar, preparar e entregar</i></b> o pedido.</li>
    <li><strong>O usuário administrador</strong> gerencia quem usa a aplicação.</li>
  </ol>
</p>
<p align="justify">
As senhas dos usuários são convertidas e armazenadas no banco de dados em <strong>hashs md5</strong>. A tradução da senha inserida pelo usuário é realizada no momento da requisição de login feita para a <b>API</b>.
</p>
<p align="justify">
Uma vez que seja realizado o login ou quando um novo usuário se registra (já sendo redirecionado para a <strong>tela da lista dos pedidos</strong>), é gerado um token, com intuito de autenticar as requisições após o término do fluxo comum a todos os usuários. Através deste token, também é realizada a verificação do tipo de usuário, para se verificar se o mesmo tem permissão para realização de determinadas requisições. 
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FLUXOS -->
## Fluxos

:small_blue_diamond: Implementado
:small_orange_diamond: Não implementado

<details>
<summary><h3>Comum</h3></summary>

<p align="justify">

Compõem o fluxo comum a todos os usuários:

:small_blue_diamond: A <strong>tela de login</strong>, que da acesso as telas dos fluxos seguintes.

:small_blue_diamond: A <strong>tela de registro</strong>, onde a pessoa deverá inserir seu nome, e-mail e senha para registrar um novo usuário. A rota utilizada aqui sempre criará um usuário do tipo cliente. Uma vez cadastrado, o usuário já é redirecionado para a <strong>tela com a lista dos produtos</strong>.
</p>
</details> 
<details>
<summary><h3>Cliente</h3></summary>

<p align="justify">
Efetuado o login, o cliente será redirecionado para a <strong>tela com a lista dos produtos</strong> disponíveis e seus respectivos preços. 

:small_blue_diamond: Selecionados os itens, existe um botão de carrinho que redirecionará o usuário para a <strong>tela de checkout</strong>. 

:small_blue_diamond: A <strong>tela de checkout</strong> contém os dados dos itens selecionados.

:small_blue_diamond: A <strong>tela de checkout</strong> contém o preço total da compra.

:small_blue_diamond: A <strong>tela de checkout</strong> contém a opção de remover itens do carrinho.

:small_blue_diamond: A <strong>tela de checkout</strong> contém um menu "dropdown" com a lista de vendedores disponíveis.

:small_blue_diamond: A <strong>tela de checkout</strong> contém um campo para inserir o endereço e nº de contato do usuário.
</p>
</details> 
<details>
<summary><h3>Vendedor</h3></summary> 

<p align="justify">
:small_blue_diamond: Efetuado o login, o vendedor será redirecionado para a <strong>tela da lista dos pedidos</strong> feitos ao mesmo.

:small_orange_diamond: É possível clicar no card do pedido, redirecionando o vendedor a tela de detalhes do pedido, onde se pode alterar o status do pedido para  <b><i>preparando</i></b> ou <b><i>entregue</i></b>.
</p>
</details> 
<details>
<summary><h3>Administrador</h3></summary>

<p align="justify">
Efetuado o login, o administrador será redirecionado para a <strong>tela da pessoa administradora</strong>.

:small_blue_diamond: É possível criar novos usuários (clientes, vendedores e administradores) válidos.

:small_blue_diamond: A criação de usuários aqui utiliza rota diferente da utilizada na de registro, pois o administrador pode atribuir o tipo de usuário que esta sendo criado (cliente, vendedor ou administrador).
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DADOS DOS USUÁRIOS -->
## Dados dos usuários

| Tipo  | ID | Nome | E-mail | Senha original | Senha md5 no banco |
| :---: | :---: | :---: | :---: | :---: | :---: |
|  administrator | 1 | Delivery App Admin |`adm@deliveryapp.com` | `--adm2@21!!--` | `a4c86edecc5aee06eff8fdeda69e0d04`
| seller | 2 | Fulana Pereira |`fulana@deliveryapp.com` | `fulana@123` | `3c28d2b0881bf46457a853e0b07531c6` |
| customer | 3 | Cliente Zé Birita |`zebirita@email.com` | `$#zebirita#$` | `1c37466c159755ce1fa181bd247cb925` |
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECNOLOGIAS -->
## Tecnologias

### Front-end
[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>](https://reactjs.org/) [<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>](https://redux.js.org/introduction/getting-started) [<img src="https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"/>](https://devdocs.io/css/) [<img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"/>](https://mui.com/pt/)

### Back-end
[<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>](https://nodejs.org/en/docs/) [<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>](https://expressjs.com/en/starter/installing.html) [<img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white"/>](https://mochajs.org/) [<img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white"/>](https://www.chaijs.com/) <a href="https://sinonjs.org"><img src="https://img.shields.io/badge/Sinon-995f44?style=for-the-badge&logo=appveyor.svg"/></a> [<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>](https://sequelize.org/docs/v6/) [<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>](https://eslint.org/docs/latest/user-guide/getting-started) [<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>](https://jwt.io/) <a href="https://joi.dev"><img src="https://img.shields.io/badge/Joi-0080ff?style=for-the-badge&logo=appveyor.svg"/></a>

### Banco de dados
[<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>](https://dev.mysql.com/doc/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INICIANDO A APLICAÇÃO -->
## Iniciando a aplicação

### Pré-requisitos


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Instalação
Em um terminal:

 1. Clone o repositorio.

  ```sh
  git clone git@github.com:FernandoCavalcantii/Bem-Gelada-Delivery-App.git
  ```
  
  2. Entre no diretório clonado.
  
  ```sh
  cd Bem-Gelada-Delivery-App
  ```
  
  3. Instale as dependências da pasta raiz, front-end e back-end.
  
  ```sh
  npm install
  ```
  ```sh
  cd front-end && npm install
  ```
  ```sh
  cd .. && cd back-end && npm install
  ```

  4. Rode o script para resetar o banco de dados.

  ```sh
  npm run db:reset
  ```
  
  5. Rode o script para iniciar o back-end.
  
  ```sh
  npm start
  ```
  
   6. Em outro terminal, acesse o diretório Bem-Gelada-Delivery-App/front-end e rode o script para iniciar o front-end.
  
  ```sh
  npm start
  ```
</details>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Rotas

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contato

<p align="right">(<a href="#readme-top">back to top</a>)</p>
