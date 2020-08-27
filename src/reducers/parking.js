import { GET_PARKING } from "../actions/types";

const initialState = {
  parking: {},
  isLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARKING:
      return {
        ...state,
        parking: action.payload.businesses.sort((a, b) =>
          a.rating > b.rating ? 1 : -1
        ),
        isLoaded: true,
      };
    default:
      return state;
  }
}
