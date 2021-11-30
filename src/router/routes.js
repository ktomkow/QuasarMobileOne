import MainLayout from "layouts/MainLayout";
import Index from "pages/Index";
import Error404 from "pages/Error404";
import Settings from "pages/Settings";
import Info from "pages/Info";
import StepperDemo from "pages/StepperDemo";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: Index },
      { path: "stepper_demo", component: StepperDemo },
      { path: "settings", component: Settings },
      { path: "info", component: Info },
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
