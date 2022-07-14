# API REST com Node.js e MongoDB
 A API é baseada no framework Express para tratar as requisições e enviar as respostas aos endpoints;
O banco de dados utilizado é o MONGO DB, porém com a ODM Mongoose;
Requisitos necessários: Criar um cadastro no mongodb, instalar node.js no seu computador e clique no botão clonar repositório para baixar o projeto.
Site NODE.JS:  https://nodejs.org/en/
Site MONGO.DB: https://www.mongodb.com/pt-br

# COMO RODAR O PROJETO
Crie uma conta no mongoDB,crie um cluster, copie o link de conexão e preencha com suas informações de usuario e senha
crie um arquivo .env com as seguintes variaveis:
DB_USER
DB_PASSWORD
DB_POST=3000
E atribua o valor de seu usuario e senha nelas
Após criar o arquivo dotenv, criar as variaveis e editar o seu link de conexão com as variaveis de ambiente
Entre no arquivo index.js na raiz do projeto (/api-mongo-db/index.js)
E na função mongoose.connect() no primeiro parametro insira seu link de conexão e salve o arquivo.
Feito isso,  abra o terminal dentro da pasta raiz do projeto e rode o comando "npm install"
Após instalar todas dependencias, rode o comando "npm run start" e o projeto já estará rodando localmente.
Para testar as rotas, recomendo que utilize o Postman ou algum programa similar.
Com o postman aberto insira a url https://localhost:3000/person e o método que você quer utilizar(POST,PUT,DELETE,GET)
# ROTAS:

 GET - /person

 POST - /person 
#   body: { name:String, salary:Number, approved:Boolean } 

 PATCH - /person/:id
#   body: { name:String, salary:Number, approved:Boolean } 

 DELETE - /person/:id

 Author: Elcio Pereira
