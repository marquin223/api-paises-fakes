# 🌍 API de Países Fakes

Uma API divertida e criativa construída com **NestJS**, que gera informações fictícias sobre países inexistentes, suas bandeiras e moedas.  
Projeto desenvolvido como parte da disciplina da UTFPR.

---

## 🚀 Funcionalidades

- **/pais** → retorna informações de um país fictício:
  - Nome do país
  - Continente inventado
  - População aproximada
  - Idioma oficial (fake)
  - Curiosidade cultural

- **/bandeira** → gera uma bandeira aleatória no formato JSON:
  - Cores utilizadas
  - Formas geométricas (círculo, estrela, faixa etc.)
  - Símbolo representativo

- **/moeda** → cria uma moeda inventada:
  - Nome da moeda
  - Símbolo
  - Taxa de câmbio fictícia (exemplo: `1 Pão Francês = 5 Coxinhas`)

---

## 📌 Escopo Futuro

- Ranking dos países fictícios mais “ricos” ou “populosos”.  
- Geração de mapas estilizados.  
- Simulação de relações diplomáticas entre países fictícios.  

---

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)  
- [NestJS](https://nestjs.com/)  
- [TypeScript](https://www.typescriptlang.org/)  

---

## 🏗️ Estrutura do Projeto (inicial)

src/

├── app.module.ts

├── core/

│ └── core.module.ts

└── shared/

└── shared.module.ts

---

## 🔀 Fluxo de Branches (Gitflow)

- **main** → branch de produção (código estável).  
- **develop** → branch principal de desenvolvimento.  
- **feature/*** → para novas funcionalidades.  
- **bugfix/*** → para correções de erros.  
- **release/*** → para preparar versões de entrega.  

---

## 💻 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone git@github.com:SEU_USUARIO/api-paises-fakes.git
   cd api-paises-fakes
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor em modo desenvolvimento:

bash
Copiar código
npm run start:dev
A API estará rodando em:

arduino
Copiar código
http://localhost:3000
