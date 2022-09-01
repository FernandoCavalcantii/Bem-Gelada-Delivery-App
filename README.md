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
          <a href="#protótipos">Protótipos</a>
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
        <li><a href="#env">.env</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li>
      <a href="#rotas">Rotas</a>
      <ul>
        <li><a href="#images">Images</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#sales">Sales</a></li>
        <li><a href="#users">Users</a></li>
      </ul>
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- SOBRE O PROJETO -->

## Sobre o projeto

<p align="justify">
Este projeto finalizou o módulo de Back-end no curso de Desenvolvimento Web da Trybe. A aplicação foi desenvolvida em um grupo formado por 05 integrantes, simulando um ambiente real de desenvolvimento em equipe. Foi uma experiência muito rica, tanto em termos de praticar o conteúdo técnico, quanto de troca de aprendizados entre os integrantes e desenvolvimento de habilidades interpessoais. Cooperação, comunicação, empatia, ensinar e aprender foram pontos bastante exercitados pela equipe.
</p>
<p align="justify">
<strong><i>Bem Gelada</i></strong> é uma aplicação completa que integra Front-end, Back-end e um banco de dados MySQL. Trata-se de uma <b>aplicação para gerenciar um sistema de delivery de bebidas</b>. Existem três tipos de usuários: <strong>customer</strong> (cliente), <strong>seller</strong> (vendedor) e <strong>administrator</strong> (administrador).

  <ol>
    <li><strong>O usuário cliente</strong> tem a capacidade de realizar a compra de itens contidos na lista de produtos e mudar o status do pedido para <b><i>recebido</i></b>.</li>
    <li><strong>O usuário vendedor</strong> pode  <b><i>aprovar, preparar e entregar</i></b> o pedido.</li>
    <li><strong>O usuário administrador</strong> gerencia quem usa a aplicação.</li>
  </ol>
</p>
<p align="justify">
As senhas dos usuários são convertidas e armazenadas no banco de dados como <strong>hashs md5</strong>. A tradução da senha inserida pelo usuário é realizada no momento da requisição de login feita para a <b>API</b>.
</p>
<p align="justify">
Uma vez que seja realizado o login ou quando um novo usuário se registra (já sendo redirecionado para a <strong>tela da lista dos pedidos</strong>), é gerado um token, com intuito de autenticar as requisições após o término do fluxo comum a todos os usuários. Através deste token, também é realizada a verificação do tipo de usuário, validando se o mesmo tem permissão para realização de determinadas requisições. 
</p>
<p align="justify">
Uma vez que seja realizado o login ou quando um novo usuário se registra (já sendo redirecionado para a <strong>tela da lista dos pedidos</strong>), é gerado um token, com intuito de autenticar as requisições após o término do fluxo comum a todos os usuários. Através deste token, também é realizada a verificação do tipo de usuário, validando se o mesmo tem permissão para realização de determinadas requisições. 
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

:small_blue_diamond: A <strong>tela de registro</strong>, onde a pessoa usuária deverá inserir seu nome, e-mail e senha para registrar um novo usuário. A rota utilizada aqui sempre criará um usuário do tipo cliente. Uma vez cadastrado, o usuário já é redirecionado para a <strong>tela com a lista dos produtos</strong>.

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

:small_orange_diamond: É possível clicar no card do pedido, redirecionando o vendedor a tela de detalhes do pedido, onde se pode alterar o status do pedido para <b><i>preparando</i></b> ou <b><i>entregue</i></b>.

</p>
</details> 
<details>
<summary><h3>Administrador</h3></summary>

<p align="justify">
Efetuado o login, o administrador será redirecionado para a <strong>tela da pessoa administradora</strong>.

:small_blue_diamond: É possível criar novos usuários (clientes, vendedores e administradores) válidos.

:small_blue_diamond: A criação de usuários aqui utiliza rota diferente da utilizada na de registro, pois o administrador pode atribuir o tipo de usuário que esta sendo criado (cliente, vendedor ou administrador).

</p>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROTÓTIPOS -->

## Protótipos

- Tela de Login

<img src="./front-end/src/images/login-bem-gelada.png">

- Tela da pessoa administradora

<img src="./front-end/src/images/admin-page-bem-gelada.png">

<!-- DADOS DOS USUÁRIOS -->

## Dados dos usuários

A tabela abaixo contém os dados dos usuários que são cadastrados ao resetar o banco de dados.

| ID  |     Tipo      |        Nome        |          E-mail          | Senha original  |         Senha md5 no banco         |
| :-: | :-----------: | :----------------: | :----------------------: | :-------------: | :--------------------------------: |
|  1  | administrator | Delivery App Admin |  `adm@deliveryapp.com`   | `--adm2@21!!--` | `a4c86edecc5aee06eff8fdeda69e0d04` |
|  2  |    seller     |   Fulana Pereira   | `fulana@deliveryapp.com` |  `fulana@123`   | `3c28d2b0881bf46457a853e0b07531c6` |
|  3  |   customer    | Cliente Zé Birita  |   `zebirita@email.com`   | `$#zebirita#$`  | `1c37466c159755ce1fa181bd247cb925` |

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

É <b>necesário</b> ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com).
- [Node.js](https://nodejs.org/en/).
- Um editor de código como [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) ou outro de sua preferência.

Ferramentas opcionais:

- [MySQL WorkBench](https://www.mysql.com/products/workbench/), a extensão do VSCode [Database Client](https://github.com/cweijan/vscode-database-client), ou outra ferramenta de sua escolha para manejar bancos de dado SQL.
- Um cliente de API REST como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou outro de sua preferência, para fazer requisições para a API.

### .env

O projeto utiliza um arquivo <b>.env</b> para definir as variáveis de ambiente. O projeto contém um arquivo <b>.env.example</b>, que possui uma sugestão de configuração das variáveis necessárias para rodar a aplicação. As variáveis de ambiente do projeto são:

- NODE_ENV: Define se a aplicação Node rodará em ambiente de `production`, `development` ou `test`.
- API_PORT: A porta local que será utilizada pelo back-end.
- MYSQL_HOST: O name do host padrão utilizado pelo cliente de linha de comando MySQL.
- MYSQL_PORT: A porta local que será utilizada pelo banco de dados.
- MYSQL_USER: Nome do usuário no servidor MySQL.
- MYSQL_DB_NAME: Nome do banco de dados local.
- EVAL_ALWAYS_RESTORE_DEV_DB: Opcionalmente no desenvolvimento local, você pode alterar o valor EVAL_ALWAYS_RESTORE_DEV_DB do arquivo .env em ./back-end para false, o que persistirá os dados dos testes locais durante os mesmos.
- MYSQL_PASSWORD: Senha do banco de dados local.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Instalação

Em um terminal:

1.  Clone o repositorio.

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

6.  Em outro terminal, acesse o diretório Bem-Gelada-Delivery-App/front-end e rode o script para iniciar o front-end.

```sh
npm start
```

</details>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROTAS -->

## Rotas

URL base: http://localhost:3001 (a porta ao final da URL é a definida na variável API_PORT do .env).

⚠️ <strong>Aviso</strong>: Ao acessar a URL base, o usuário é automaticamente redirecionado para a rota http://localhost:3001/login.

<!-- IMAGES -->

<details>
  <summary><h3>Images</h3></summary>
  
  - <b>[ GET ] /images/:nome-do-arquivo-jpg</b>

:information_source: : Esta rota retorna a imagem em <b>jpg</b> referente ao nome do arquivo passado pelo parâmetro.

Request para:

```sh
http://localhost:3001/images/antarctica_pilsen_300ml.jpg
```

Retorno da API:

- Status HTTP: 200.
- Body:

<img src="back-end/src/images/antarctica_pilsen_300ml.jpg" height=250px width=250px>

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
</details>

<!-- LOGIN -->

<details>
  <summary><h3>Login</h3></summary>
  
- <b>[ POST ] /login</b>

:information_source: : Esta rota retorna um token utilizado para autenticação do usuário nas requisições após o login.

Request para:

```sh
http://localhost:3001/login
```

Request body:

```sh
{
"email": "zebirita@email.com",
"password": "$#zebirita#$"
}
```

Retorno da API:

- Status HTTP: 200.
- Body:

```sh
{ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }
```

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
</details>

<!-- PRODUCTS -->

<details>
  <summary><h3>Products</h3></summary>
  
- <b>[ GET ] /products</b>

:information_source: : Esta retorna os dados de todos os produtos cadastrados no banco de dados.

Request para:

```sh
http://localhost:3001/products
```

Request headers:

```sh
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Retorno da API:

- Status HTTP: 200.
- Body:

```sh
[
    {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20",
        "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
        "id": 2,
        "name": "Heineken 600ml",
        "price": "7.50",
        "url_image": "http://localhost:3001/images/heineken_600ml.jpg"
    },
    ...
]
```

- <b>[ GET ] /products/:ID</b>

:information_source: : Esta retorna os dados do produto do ID passado pelo parâmetro.

Request para:

```sh
http://localhost:3001/products/1
```

Request headers:

```sh
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Retorno da API:

- Status HTTP: 200.
- Body:

```sh
{
  "id": 1,
  "name": "Skol Lata 250ml",
  "price": "2.20",
  "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</details>

<!-- SALES -->
<details>
<summary><h3>Sales<h3></summary>

- <b>[ POST ] /sales</b>

:information_source: : Esta rota cadastra uma nova venda, retornando os dados da mesma.

Request para:

```sh
http://localhost:3001/sales
```

Request headers:

```sh
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Request body:

```sh
{
  "userId": 2,
  "sellerId": 2,
  "totalPrice": 20,
  "deliveryAddress": "teste",
  "deliveryNumber": "10",
  "itemsSold": [{"productId": 2, "quantity": 5 }]
}
```

Retorno da API:

- Status HTTP: 201.
- Body:

```sh
{
  "status": "Pendente",
  "id": 1,
  "userId": 2,
  "sellerId": 2,
  "totalPrice": 20,
  "deliveryAddress": "teste",
  "deliveryNumber": "10",
  "saleDate": "2022-09-01T19:19:07.625Z"
}
```

- <b>[ GET ] /sales/:ID</b>

:information_source: : Esta rota retorna a venda do ID passado pelo parâmetro.

Request para:

```sh
http://localhost:3001/sales/1
```

Request headers:

```sh
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Resposta da API:

- Status HTTP: 200.
- Body:

```sh
{
    "id": 1,
    "userId": 2,
    "sellerId": 2,
    "totalPrice": "20.00",
    "deliveryAddress": "teste",
    "deliveryNumber": "10",
    "saleDate": "2022-09-01T19:19:07.000Z",
    "status": "Pendente",
    "products": [
        {
            "id": 2,
            "name": "Heineken 600ml",
            "price": "7.50",
            "SaleProduct": {
                "quantity": 5
            }
        }
    ],
    "seller": {
        "name": "Fulana Pereira"
    },
    "customer": {
        "name": "Fulana Pereira"
    }
}
```

- <b>[ GET ] /sales/user/:ID</b>

:information_source: : Esta rota retorna todas as vendas registradas do <b>usuário seller</b> do ID passado pelo parâmetro.

Request para:

```sh
http://localhost:3001/sales/user/2
```

Request headers:

```sh
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Resposta da API:

- Status HTTP: 200.
- Body:

```sh
[
    {
        "id": 1,
        "userId": 2,
        "sellerId": 2,
        "totalPrice": "20.00",
        "deliveryAddress": "teste",
        "deliveryNumber": "10",
        "saleDate": "2022-09-01T19:19:07.000Z",
        "status": "Pendente",
        "products": [
            {
                "id": 2,
                "name": "Heineken 600ml",
                "price": "7.50",
                "SaleProduct": {
                    "quantity": 5
                }
            }
        ]
    },
    {
        "id": 2,
        "userId": 2,
        "sellerId": 2,
        "totalPrice": "20.00",
        "deliveryAddress": "teste",
        "deliveryNumber": "10",
        "saleDate": "2022-09-01T20:08:53.000Z",
        "status": "Pendente",
        "products": [
            {
                "id": 1,
                "name": "Skol Lata 250ml",
                "price": "2.20",
                "SaleProduct": {
                    "quantity": 5
                }
            }
        ]
    }
]
```

- <b>[ PUT ] /sales/:ID</b>

:information_source: : Esta rota é usada por um <b>usuário seller</b> para alterar o status do pedido para "Preparando" ou "Em trânsito".

Request para:

```sh
http://localhost:3001/sales/1
```

Request headers:

```sh
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Resposta da API:

- Status HTTP: 200.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

</details>
<!-- CONTATO -->

<!-- USERS -->

<details>
<summary><h3>Users<h3></summary>

:construction: : A documentação desta seção ainda está em construção!

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</details>

## Contato

<p align="justify">
Tem alguma sugestão, melhoria, dúvida, gostou do projeto ou quer conversar sobre algum assunto? Entre em contato comigo, ficarei muito feliz com a interação. Responderei com a maior brevidade possível!
</p>

[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/fernando-augusto-cavalcanti/)
<a href = "mailto:fafhcavalcanti@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
