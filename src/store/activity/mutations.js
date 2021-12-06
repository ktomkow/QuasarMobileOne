const storage = window.localStorage;

export function add(state, newActivity) {
  state.myActivities.push(newActivity);

  storage.setItem("myActivities", JSON.stringify(state.myActivities));
}

export function setMyActivities(state, activities) {
  state.myActivities = activities;
}