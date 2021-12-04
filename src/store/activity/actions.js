export function add(context, data) {
  const newItem = {
    typeId: data.activity.id,
    date: new Date(data.date),
    description: data.description,
  };

  context.commit("add", newItem);
}
