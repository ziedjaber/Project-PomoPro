// actions.js

export const changeTab = (tab) => ({
  type: "CHANGE_TAB",
  payload: tab,
});

export const updateTime = (time) => ({
  type: "UPDATE_TIME",
  payload: time,
});

export const updateTask = (task) => ({
  type: "UPDATE_TASK",
  payload: task,
});
