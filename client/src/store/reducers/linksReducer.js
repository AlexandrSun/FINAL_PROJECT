import * as constants from "../constants";

const initialState = {
  links: [],
};

function linksReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_LINKS_SUCCESS:
      return { ...state, links: action.payload };
    default:
      return state;
  }
}

export default linksReducer;
