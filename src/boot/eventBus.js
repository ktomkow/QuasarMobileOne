import { boot } from "quasar/wrappers";
import mitt from "mitt";

const eventBus = mitt();

export default boot(({ app, store }) => {
  app.config.globalProperties.$eventBus = eventBus;
  store.$eventBus = eventBus;
});

export { eventBus };
