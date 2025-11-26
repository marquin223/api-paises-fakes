# 🌍 API de Países — NestJS + Prisma + MySQL

## 👤 Autor

**Nome:** _[Marcos Costa]_  
**Curso:** _[TSI]_

---

## 📌 Descrição do Projeto

Esta é uma API desenvolvida com **NestJS**, **Prisma ORM** e **MySQL**, criada para gerenciar dados de países.  
Mesmo utilizando dados fictícios, seu objetivo é demonstrar:

- Arquitetura modular de APIs em NestJS
- Persistência de dados (CRUD completo)
- Autenticação e autorização com JWT
- Documentação automática com Swagger
- Boas práticas de organização de código e segurança

O projeto atende aos requisitos da avaliação final, cobrindo:  
**RA1, RA2, RA4 e RA5.**

## 🛠️ Instruções de Execução Local

### ✔️ **Pré-requisitos**

- **Node.js:** versão 18+
- **NPM ou Yarn:** qualquer versão atual
- **MySQL:** versão 8+
- **Git** instalado na máquina
- **Nest CLI** (opcional, mas recomendado):

```bash
npm i -g @nestjs/cli
```

Clonar o repositório:

git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

Instalar dependências:

npm install

### 🗄️ Configuração do Banco de Dados

Crie um banco MySQL:

CREATE DATABASE paisesdb;

Configure o Prisma:

npx prisma migrate dev

Ou gere o schema diretamente no banco:

npx prisma db push

(Opcional) Popular com países fake:

npm run seed

### 🔐 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="mysql://root:senha@localhost:3306/paisesdb"
JWT_SECRET="uma_chave_secreta_segura"
JWT_EXPIRES_IN=3600

### ▶️ Execução da API

Rodar em modo desenvolvimento:

npm run start:dev

Rodar em modo produção:

npm run build
npm run start:prod

A API rodará em:
👉 http://localhost:3000

Documentação Swagger:
👉 http://localhost:3000/api

### 🗃️ Diagrama ERD (Entidade-Relacionamento)
Modelo de entidades usado no projeto (User e Pais):

<img width="500" height="500" alt="models" src="https://github.com/user-attachments/assets/7ad681a3-236a-4b2d-9a9b-a6f21212a6f6" />


## RA1 — Arquitetura da API (NestJS)

- [x] Arquitetura modular (modules/controllers/services)

- [x] Padrão MVC aplicado

- [x] Prisma integrado como provider

## RA2 — Persistência e CRUD

- [x] Banco MySQL configurado

- [x] Prisma ORM configurado

- [x] CRUD completo de países

- [x] CRUD documentado com Swagger

- [x] Seed de dados fake

### RA4 — Documentação e Deploy

- [x] Swagger configurado

- [ ] Deploy hospedado

### RA5 — Autenticação e Autorização

- [x] Login com JWT

- [x] Proteção de rotas

- [x] ROLE ADMIN para rotas de escrita

- [x] Validação do token em middleware/guards
