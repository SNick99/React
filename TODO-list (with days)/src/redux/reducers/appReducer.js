const initialState = {
  CurrentDate: "",

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
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  },

  ADD_Todo: false,
  ADD_I: "",
  InputValue: "",
  InputValue1: "",
  date: "",
  CurrentDate: "",
  check: true,
  key: 1,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD1":
      return {
        counter: state.counter + 1,
      };

    case "SUB1":
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}
