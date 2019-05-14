import {
  OPEN_ADD_TODO,
  CHANGE_INPUT_ADD_TODO,
  BUTTON_ADD_TODO,
  CLICK_DATE,
  ON_DELETE_TODO,
  ON_CHECKBOX,
  ON_CHANGE_TODO,
  CHANGE_INPUT_TODO,
  CHANGE_TODO,
} from "../actions/types";
import moment from "moment";
const initialState = {
  todoText: {
    Monday: [
      {
        title: "Learn react",
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: "Monday",
        checkChange: false,
      },
      {
        title: "Learn English",
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: "Monday",
        checkChange: false,
      },
      {
        title: "Sport",
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: "Monday",
        checkChange: false,
      },
    ],
    Sunday: [
      {
        title: "Sport",
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: "Sunday",
        checkChange: false,
      },
    ],
    Tuesday: [
      {
        title: "Learn react",
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: "Monday",
        checkChange: false,
      },
    ],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  },

  ADD_Todo: false,
  ADD_I: "far fa-plus-square",
  InputValue: "",
  InputValue1: "",
  ClickDate: moment().format("dddd"),
  CurrentDate: moment().format("dddd"),
  check: true,
  key: 1,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ADD_TODO:
      return {
        ...state,
        ADD_Todo: action.payload.ADD_Todo,
        ADD_I: action.payload.ADD_I,
      };

    case CHANGE_INPUT_ADD_TODO:
      return {
        ...state,
        InputValue: action.payload.InputValue,
      };

    case CHANGE_INPUT_TODO:
      return {
        ...state,
        InputValue1: action.payload.InputValue1,
      };

    case BUTTON_ADD_TODO:
      return {
        ...state,
        todoText: action.payload,
      };

    case CLICK_DATE:
      return {
        ...state,
        ClickDate: action.payload.ClickDate,
      };

    case ON_DELETE_TODO:
      return {
        ...state,
        todoText: action.payload,
      };
    case ON_CHECKBOX:
      return {
        ...state,
        todoText: action.payload,
      };
    case ON_CHANGE_TODO:
      return {
        ...state,
        todoText: action.payload,
      };
    case CHANGE_TODO:
      return {
        ...state,
        todoText: action.payload,
      };
    default:
      return state;
  }
}
