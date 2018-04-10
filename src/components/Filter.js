import React, { Component } from "react";
import { connect } from "react-redux";
import { PEOPLE, PLANETS, STARSHIPS } from "../api/filters";
import { toggleFilter } from "../actions";

// Represents filter. If the filter is active change state in redux store
class Filter extends Component {
  render() {
    const { people, planets, starships } = this.props.filter;
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="row">
            <div className="col s4">
              <input
                onChange={() => this.props.toggleFilter(PEOPLE)}
                checked={people}
                type="checkbox"
                id="show-people"
              />
              <label htmlFor="show-people">People</label>
            </div>
            <div className="col s4">
              <input
                onChange={() => this.props.toggleFilter(PLANETS)}
                checked={planets}
                type="checkbox"
                id="show-planets"
              />
              <label htmlFor="show-planets">Planets</label>
            </div>
            <div className="col s4">
              <input
                onChange={() => this.props.toggleFilter(STARSHIPS)}
                checked={starships}
                type="checkbox"
                id="show-starships"
              />
              <label htmlFor="show-starships">Starships</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filter }) => {
  return {
    filter
  };
};

export default connect(mapStateToProps, { toggleFilter })(Filter);
