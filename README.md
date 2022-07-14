# API REST com Node.js e MongoDB
 A API é baseada no framework Express para tratar as requisições e enviar as respostas aos endpoints;<br/>
O banco de dados utilizado é o MONGO DB, porém com a ODM Mongoose;<br/>
Requisitos necessários: Criar um cadastro no mongodb, instalar node.js no seu computador e clique no botão clonar repositório para baixar o projeto.<br/>
Site NODE.JS:  https://nodejs.org/en/<br/>
Site MONGO.DB: https://www.mongodb.com/pt-br<br/>

# COMO RODAR O PROJETO
Crie uma conta no mongoDB,crie um cluster, copie o link de conexão e preencha com suas informações de usuario e senha<br/>
crie um arquivo .env com as seguintes variaveis:<br/>
DB_USER<br/>
DB_PASSWORD<br/>
DB_POST=3000<br/>
E atribua o valor de seu usuario e senha nelas<br/>
Após criar o arquivo dotenv, criar as variaveis e editar o seu link de conexão com as variaveis de ambiente<br/>
Entre no arquivo index.js na raiz do projeto (/api-mongo-db/index.js)<br/>
E na função mongoose.connect() no primeiro parametro insira seu link de conexão e salve o arquivo.<br/>
Feito isso,  abra o terminal dentro da pasta raiz do projeto e rode o comando "npm install"<br/>
Após instalar todas dependencias, rode o comando "npm run start" e o projeto já estará rodando localmente.<br/>
Para testar as rotas, recomendo que utilize o Postman ou algum programa similar.<br/>
Com o postman aberto insira a url https://localhost:3000/person e o método que você quer utilizar(POST,PUT,DELETE,GET)<br/>
# ROTAS:

 GET - /person<br/>

 POST - /person <br/>
#   body: { name:String, salary:Number, approved:Boolean } <br/>

 PATCH - /person/:id<br/>
#   body: { name:String, salary:Number, approved:Boolean } <br/>

 DELETE - /person/:id<br/>

 Author: Elcio Pereira
