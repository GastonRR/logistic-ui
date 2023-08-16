import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";

import OrderPage from "@pages/OrderPage";
import ProductsPage from "@pages/ProductsPage";
import ReportsPage from "@pages/ReportsPage";

export const routes: Page[] = [
  {
    path: "/",
    component: OrderPage,
    exact: true,
  },
  {
    path: "/order/:id",
    component: ProductsPage,
  },
  {
    path: "/reports",
    component: ReportsPage,
  },
];

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
