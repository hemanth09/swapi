import { TOGGLE_FILTER } from "../actions/types";

export default (
  state = { people: true, planets: true, starships: true },
  action
) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      const { people, planets, starships } = state;
      const newState = {
        people,
        planets,
        starships
      };
      newState[action.payload] = !newState[action.payload];
      return newState;
    default:
      return state;
  }
};
