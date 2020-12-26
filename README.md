<h1 align="center">
   Pokédex
</h1>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/henriquepagno/pokemon-list?color=7159C1">
<img alt="Made by Henrique Pagno de Lima" src="https://img.shields.io/badge/made%20by-Henrique Pagno de Lima-%20?color=7159C1">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/henriquepagno/pokemon-list?color=7159C1">
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/henrique-pagno-de-lima/?locale=en_US" target="_blank" >
    <img alt="Linkedin - Henrique Pagno" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
  </a>
</p>

A Pokédex built with GraphQL and Apollo Client, which allows the user to navigate and search all the first 151 Pokémons.
The user can change the Pokémon's attacks name and damage, as well as the Max HP and Max CP. This changes are saved on Apollo Client's query cache.
The application also has a responsive layout for better usage in cellphones and tablets.
It is important to notice that this is a frontend-only project.
It consumes the project [GraphQL Pokémon](https://github.com/lucasbento/graphql-pokemon/) built by [Lucas Bento](https://github.com/lucasbento), which should be used when running this application.

<br>

<p align="center">
  <img src="/screenshots/pokemon-list.gif" alt="Pokémon list gif"/>
</p>

<br>

<h3 align="center">
  Technologies
</h3>

This project was developed with the following technologies:

-   [ReactJS](https://reactjs.org/)
-   [GraphQL](https://graphql.org/)
-   [Apollo Client](https://www.apollographql.com/docs/react/)
-   [Styled-components](https://www.styled-components.com/)
-   [React-toastify](https://github.com/fkhadra/react-toastify)
-   [Yup](https://www.npmjs.com/package/yup)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

<h3 align="center">
Executing the Application
</h3>

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

#### Backend
Clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://github.com/lucasbento/graphql-pokemon/

#install the backend dependencies
yarn

# Run the backend
yarn run watch

```

#### Frontend
Clone the repository and install the dependencies.
```bash
git clone https://github.com/henriquepagno/pokemon-list

#install the frontend dependencies
yarn

# Run the application
yarn start
```
