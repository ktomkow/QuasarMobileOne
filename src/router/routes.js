import MainLayout from "layouts/MainLayout";
import Index from "pages/Index";
import Error404 from "pages/Error404";
import Settings from "pages/Settings";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: Index },
      { path: "settings", component: Settings },
    ],
  },
  ,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: Error404,
  },
];

export default routes;
