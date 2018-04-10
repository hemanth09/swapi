# Star Wars Wiki Api

This project is bootstrapped using [create-react-app](https://github.com/facebook/create-react-app)

## Prerequisites

nodeJS

## How to begin

Inside project `root` directory run `npm install`. After all dependencies are installed run `npm start`. New browser window should open.

## Project structure

### actions

`index.js` Available actions. These actions are triggered from components.

`types.js` String constants to keep it consistent between redurcers

### api

`endpoints.js` String constants to keep track of available API endpoints

`filters.js` String constants to keep track of available filters

### components

In this directory are all UI components that are used. `ItemList` is responsible for showing data to user. `Searchbar` is triggering action to make API call and fetch data. `Filter` is responsible for filtering data.

### reducers

`filterReducer` keeps track of active filters

`searchReducer` take data from API and handle to them to component. Component then renders it

