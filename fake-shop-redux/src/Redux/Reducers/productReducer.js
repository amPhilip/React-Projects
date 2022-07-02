import { ActionTypes } from "../Constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "react",
      category: "programming",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
