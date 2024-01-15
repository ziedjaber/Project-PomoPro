// reducers.js

import { CHANGE_TAB, UPDATE_TIME, UPDATE_TASK } from "../Constants/actions-types";

const initialState = {
  tab: "Pomodoro",
  time: 25 * 60,
  task: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, tab: action.payload };
    case UPDATE_TIME:
      return { ...state, time: action.payload };
    case UPDATE_TASK:
      return { ...state, task: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
