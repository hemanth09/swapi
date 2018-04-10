import "./Item.css";
import React, { Component } from "react";

// Represents one item
class Item extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="item-list-item card-panel teal darken-3 white-text">
        <h5>{name}</h5>
      </div>
    );
  }
}

export default Item;
