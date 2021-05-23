# Fast & Furries

Projeto da disciplina Introdução ao Desenvolvimento Web - SCC0219.

O tema escolhido por nós foi desenvolver um website de um petshop virtual, que vende produtos como (mas não limitado a) brinquedos e acessórios destinados à bichinhos de estimação.

### Autores
10851687	Débora Buzon da Silva <br>
11275147	Dikson Ferreira dos Santos <br>
10716960	Fernando de Souza Lincoln <br>

## 1. Requisitos

The system must have 2 types of users: Clients and Administrators

Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.

Customers are users who access the system to buy products/services.

The admin record includes, at least: name, id, phone, email.

Each customer's record includes, at least: name, id, address, phone, email

Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.

Your store may sell products, services or both (you decide)

Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.

Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.

Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   

The system must provide accessibility requirements and provide good usability. The system must be responsive

------

O sistema deve ter 2 tipos de usuários: clientes e administradores (que ainda precisa ser implementado).

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtosfornecidos. O aplicativo já vem com uma conta `admin` com senha `admin`.

Clientes são usuários que acessam o sistema para comprar produtos.

O registro do administrador contém nome, CPF, telefone e e-mail.

O registro de cada cliente contém nome, CPF, endereço, telefone e e-mail.

Os registros de produto incluem nome, id, foto, descrição, preço, quantidade (em estoque), quantidade vendida.

Venda de produtos: Os produtos são selecionados, sua quantidade escolhida e são incluídos em um carrinho. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados somente mediante pagamento ou pelos clientes.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir (crud) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade em estoque.

Sua funcionalidade: Crie uma funcionalidade que seja específica para seu aplicativo. Não precisa ser algo complicado. Por exemplo, se você está vendendo carros, pode permitir que os usuários usem um acelerador para ouvir como o motor de cada carro sobe e desce.

O sistema deve fornecer requisitos de acessibilidade e boa usabilidade. O sistema deve ser responsivo



## 2. Descrição do Projeto

Fast & Furries é um petshop virtual, implementado com HTML e CSS (até agora)

### Diagrama de navegação:

<img src="https://github.com/dbuzon/ProjetoWeb/blob/master/mockups/navigationDiagram.png" width=600px>

As imagens do mockup estão na pasta `/mockups`. 
Também pode ser acessado nos links abaixo:
- [Homepage](/mockups/Homepage.png)
  - [Produto](/mockups/Produto.png)
- [Login](/mockups/Login.png)
- [Perfil do Cliente](/mockups/PerfildoCliente.png)
- [Carrinho](/mockups/carrinho.png)
  - [Finalizar Compra](/mockups/FinalizarCompra.png)

### Funcionalidades

As funcionalidades visadas através das telas de mockup são:

- Login com email e senha na plataforma, com opção de criar uma nova conta.
- Visualização das informações do cliente, com opção de alterar cadastro.
- Acesso à homepage, com visualização de alguns produtos selecionados pela loja.
- Visualização de um produto, com seu nome, descrição, preço e botão para adicionar ao carrinho.
- Acesso ao carrinho de compras, com opção de mudar a quantidade de itens, conferir o preço total e finalizar compra.
- Opção de inserir informações do cartão de crédito para efetuar o pagamento.
- Opção de alterar o endereço de entrega.

### Servidor

No atual estado do nosso site, as informações salvas no servidor atualmente seriam:

- Cadastro do cliente
  - Informações de login: Email, Senha (não em plain text, claro)
  - Informações pessoais: Nome, CPF, Endereço, Número de telefone)
  - Produtos no carrinho
  - Histórico de compras
 

## 3. Comentários sobre o código

Usamos bootstrap para facilitar a implementação de um layout responsivo.

## 4. Plano de teste

## 5. Resultados dos testes

## 6. Building

## 7. Problemas

Um dos problemas identificados inicialmente foi uma certa dificuldade de traduzir as imagens do mockup para código HTML e CSS, por causa da falta de padronização do tamanho das fontes entre as telas feitas no mockup.

## 8. Comentários

Os mockups foram feitos usando a ferramenta Figma.
