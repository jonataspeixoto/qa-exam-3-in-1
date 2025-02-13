# Projeto de Cadastro de Usuário

Este projeto é uma aplicação Node.js que implementa um formulário de cadastro de usuário com validações de campos obrigatórios, senha forte e confirmação de e-mail. Além disso, inclui testes automatizados de interface utilizando o Cypress.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

## 2. Instalação das Dependências

Após clonar o repositório, acesse a pasta do projeto e instale as dependências necessárias:

```bash
npm install
```

## 3. Executando a Aplicação

Para iniciar o servidor da aplicação, utilize o seguinte comando:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`, onde você poderá acessar o formulário de cadastro.

## 4. Executando os Testes Automatizados

Este projeto utiliza o **Cypress** para testes de interface. Para rodar os testes, siga os passos abaixo:

### 4.1 Instalando o Cypress

Caso ainda não tenha o Cypress instalado, instale-o com:

```bash
npm install cypress --save-dev
```

### 4.2 Abrindo a Interface do Cypress

Para abrir a interface gráfica do Cypress e executar os testes manualmente, utilize:

```bash
npx cypress open
```

### 4.3 Executando os Testes em Modo Headless

Para rodar os testes sem interface gráfica, execute:

```bash
npx cypress run
```

## 5. Estrutura do Projeto

- `app.js` → Arquivo principal da aplicação Node.js.
- `views/` → Contém os arquivos HTML para renderização das páginas.
- `public/` → Arquivos estáticos como CSS e imagens.
- `cypress/` → Diretório onde estão os testes automatizados.

## 6. Validações Implementadas no Cadastro

A aplicação valida os seguintes requisitos antes de permitir o cadastro:

✅ **Campos obrigatórios** → Todos os campos devem ser preenchidos.  
✅ **Senha forte** → A senha deve ter pelo menos **8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 número**.  
✅ **Confirmação de e-mail** → O e-mail e sua confirmação devem ser **iguais**.  

