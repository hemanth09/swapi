import React, { Component } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar/SearchBar";
import ItemList from "./ItemList";
import Filter from "./Filter";

// Glue all components together
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar />
        <Filter />
        <ItemList />
      </div>
    );
  }
}

export default App;
