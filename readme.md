
<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/react-native-template-tea-template.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-tea-template)
[![npm](https://img.shields.io/npm/dt/react-native-template-tea-template.svg)](https://www.npmjs.com/package/react-native-template-tea-template)
[![GitHub issues](https://img.shields.io/github/issues-raw/CarlosETB/TeaTemplate.svg)](https://github.com/CarlosETB/TeaTemplate/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/CarlosETB/TeaTemplate.svg)](https://github.com/CarlosETB/TeaTemplate/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-tea-template.svg)](https://choosealicense.com/licenses/mit/)

<!-- PROJECT LOGO -->

<p align="center">
    <img height="250px" src="https://i.imgur.com/bhNJn9I.jpg" alt="Logo">
  <h3 align="center">Tea Template</h3>
</p>

<br />

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Utilizando](#utilizando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)


<br />

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Um template com o objetivo de acelerar o processo de criação de um projeto, disponibilizando ferramentas como styled-components e absolute path ja configuradas e uma estrutura de projeto bem definida.

<br />

<!-- USING -->

## Utilizando

Antes de usar em algum projeto, se atente às informações abaixo:

<br />

### Estrutura de Arquivos

A estrutura de arquivos está organizada da seguinte forma:

```bash
    TeaTemplate
    │
    ├── src/
    │   │
    │   ├── api/
    │   │
    │   ├── assets/
    │   │   │
    │   │   └── Logo/
    │   │       │
    │   │       └── Logo.png
    │   │
    │   ├── components/
    │   │
    │   ├── config/
    │   │
    │   ├── helpers/
    │   │   │
    │   │   ├── colors/
    │   │   │   └── index.js
    │   │   │ 
    │   │   └── images/
    │   │       └── index.js
    │   │ 
    │   ├── pages/ 
    │   │   │
    │   │   └── Main/
    │   │       │
    │   │       ├── index.js
    │   │       │
    │   │       └── styles.js
    │   │ 
    │   ├── routes/
    │   │   │
    │   │   └── index.js
    │   │ 
    │   └── index.js
    │
    ├── .eslintrc.json
    │
    ├── .gitattributes
    │
    ├── .gitignore
    │
    ├── babel.config.js
    │
    ├── dependencies.json
    │
    ├── devDependencies.json
    │
    ├── index.js
    │
    ├── jsconfig.json
    │
    ├── LICENSE
    │
    ├── package.json
    │
    └── readme.md
```

<br />

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
    react-native init Example --template tea-template
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

<br />

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
