import { FETCH_DATA, TOGGLE_FILTER } from "./types";
import { API_PEOPLE, API_PLANETS, API_STARSHIPS } from "../api/endpoints";
import axios from "axios";

export const fetchData = searchTerm => async dispatch => {
  const people = await axios.get(`${API_PEOPLE}?search=${searchTerm}`);
  const starships = await axios.get(`${API_STARSHIPS}?search=${searchTerm}`);
  const planets = await axios.get(`${API_PLANETS}?search=${searchTerm}`);

  dispatch({
    type: FETCH_DATA,
    payload: {
      people: people.data.results,
      starships: starships.data.results,
      planets: planets.data.results
    }
  });
};

export const toggleFilter = filter => async dispatch => {
  dispatch({
    type: TOGGLE_FILTER,
    payload: filter
  });
};
