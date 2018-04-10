import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Item from "./Item/Item";

// List of data. Just renders all items. Also checking if the filter is active
class ItemList extends Component {
  // Renders message to the user that no data was found
  renderEmptySearch = () => {
    const { people, starships, planets } = this.props.search;
    if (people && people.length + starships.length + planets.length === 0) {
      return (
        <div className="col s4 offset-s4 center-align teal-text text-darken-3">
          <p>
            <i className="large material-icons">sentiment_dissatisfied</i>
          </p>
          <p>Nothing was found for the given search criteria</p>
        </div>
      );
    }
  };

  // Render collection based on given parameter name e.g people, planets, starships
  renderCollection = name => {
    const filter = this.props.filter[name];
    const searchResults = this.props.search[name];
    // Check if filter is active
    if (filter) {
      return _.map(searchResults, item => {
        return (
          <div key={item.name} className="col s3">
            <Item name={item.name} gender={item.gender} height={item.height} />
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="row">
        {this.renderCollection("people")}
        {this.renderCollection("starships")}
        {this.renderCollection("planets")}
        {this.renderEmptySearch()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ItemList);
