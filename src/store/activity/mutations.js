const storage = window.localStorage;

export function add(state, newActivity) {
  state.myActivities.push(newActivity);

  storage.setItem("myActivities", JSON.stringify(state.myActivities));
}
