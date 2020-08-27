import axios from "axios";
import { GET_PARKING } from "./types";

export const getParking = (loc) => (dispatch) => {
  return axios
    .get(process.env.REACT_APP_BASE_URL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      params: {
        categories: "parking",
        sort_by: "distance",
        limit: "50",
        location: loc,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_PARKING,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
