export function add(context, data) {
  const ids = context.state.myActivities.map((x) => x.id);
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  console.log("ids", ids);
  console.log("maxId", maxId);
  const newItem = {
    id: maxId + 1,
    typeId: data.activity.id,
    date: new Date(data.date),
    description: data.description,
  };

  console.log("newItem", newItem);

  context.commit("add", newItem);
}
