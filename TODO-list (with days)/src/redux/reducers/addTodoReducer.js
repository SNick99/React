import { OPEN_ADD_TODO } from "../actions/types";

const initialState = {
  ADD_Todo: false,
  ADD_I: "",
  InputValue: "",
};

export default function addTodoReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ADD_TODO:
      return {
        ADD_Todo: !state.ADD_Todo,
      };
    default:
      return state;
  }
}
