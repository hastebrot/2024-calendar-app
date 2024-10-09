import { createHashRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: MainPage,
  },
]);
