export const getIcon = (state) => (typeId) => {
  const activityType = state.types.find((x) => x.id === typeId);
  const result = activityType ? activityType.icon : "question_mark";
  return result;
};
