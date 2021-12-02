import { boot } from "quasar/wrappers";
import importedAxios from "axios";
import qs from "qs";

const axios = importedAxios.create({ baseURL: "https://api.example.com" });

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { indices: false });
};

export default boot(({ app, store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = axios;
  store.$axios = axios;
});

export { axios };
