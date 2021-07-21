# The Task

Your task is to build an API explorer for the Rick & Morty API! It should be a simple web app that **lists all entries** for the 3 models (Characters, Episodes, Location), and **has detail views** for each of them showing all their attributes and relationships.

You don’t need to support the creation, editing or deleting of objects, but design your code in a way that will make this easy to add in the future. The mockup below is just rough guidance for one of the view, you can design the UI however you want as long as it’s usable (I’d recommend just using your favourite UI library - don't spend too much time here). The app should:

- Show loading indicators for requests
- Support pagination
- Easily allow for future changes to the models (e.g. adding new fields to Authors or a
new model entirely)
- Contain tests for key components and functionality

# API

The API uses GraphQL and is hosted here: https://rickandmortyapi.com/graphql. You'll find a playground and documentation there.

# Frontend

Please use React and Apollo to build your client. Everything else is up to you!

![image](https://user-images.githubusercontent.com/57347092/126491532-98abf937-b2ca-4ee4-aaa3-200ab54a2b55.png)

# The Project

## Technologies
Project is created with:
* React/Typescript
* Codegen for Types generation
* Apollo
* Material UI

## Install Depndencies

### `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn types:graphql`

Generates code from the GraphQL schema and GraphQL operations





