# 🌍 API de Países Fakes

Uma API divertida e criativa construída com **NestJS**, para informações fictícias sobre países inexistentes, e suas curiosidades.  
Também possui **autenticação JWT**, **autorização por roles** (USER e ADMIN), **CRUD de países**, e **documentação interativa com Swagger**.

Projeto desenvolvido como parte da disciplina da UTFPR.

---

## 🚀 Funcionalidades

| Rota                  | Descrição                                             | Autenticação    |
| --------------------- | ----------------------------------------------------- | --------------- |
| `POST /auth/register` | Registra usuário (role padrão USER)                   | ✅              |
| `POST /auth/login`    | Faz login e retorna token JWT                         | ✅              |
| `GET /auth/me`        | Retorna o usuário autenticado                         | ✅ Bearer Token |
| `GET /pais`           | Lista países existentes ou gera novos automaticamente | ✅              |
| `POST /pais`          | Cria país manualmente (somente ADMIN)                 | ✅ + Role ADMIN |

---

## 🧠 Geração Automática de Países

Quando você acessa:

GET /pais

E ainda **não houver países cadastrados**, a API **gera países fictícios automaticamente**, sem precisar adicionar manualmente.

Exemplo de resposta:

```json
{
  "nome": "República de Cafélândia",
  "continente": "América Aromática",
  "populacao": 12000000,
  "idioma": "Cafeinês",
  "curiosidade": "Todo cidadão recebe um café grátis por dia."
}
```

## 🛠 Tecnologias Utilizadas

NestJS

Prisma ORM

PostgreSQL

JWT (Autenticação)

Swagger (Documentação)

TypeScript

📂 Estrutura do Projeto

src/

auth/

pais/

prisma/

main.ts

## 💻 Como Rodar Localmente

Clone o repositório:

git clone https://github.com/SEU_USUARIO/api-paises-fakes.git
cd api-paises-fakes
Instale as dependências:

npm install
Configure o .env:

env

DATABASE_URL="postgresql://usuario:senha@localhost:5432/meubanco"
JWT_SECRET="minha_chave_secreta"
Execute as migrações:

npx prisma migrate dev
Inicie o servidor:

npm run start:dev
Acesse:

API: http://localhost:3000

Swagger: http://localhost:3000/api

🔐 Autenticação no Swagger
Faça login em /auth/login

Copie o token access_token

Clique em Authorize

Cole assim:

nginx

Bearer SEU_TOKEN_AQUI
🔥 Deploy no Railway

1. Crie um PostgreSQL no Railway
   Acesse: https://railway.app

Clique em New → Database → PostgreSQL

Copie DATABASE_URL

2. Deploy da API
   Clique em New → Deploy from GitHub

Selecione este repositório

3. Configure variáveis
   No menu Variables, adicione:

Chave Valor
DATABASE_URL Cola a URL do banco
JWT_SECRET Uma chave secreta boa

4. Rode migrações no Railway
   Clique no botão >\_ Shell no serviço e execute:

npx prisma migrate deploy 5. Pronto 🎉
URL da API:
https://seuapp.up.railway.app

Swagger:
https://seuapp.up.railway.app/api
