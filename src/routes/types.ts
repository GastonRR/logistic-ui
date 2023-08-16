import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/order/:id": {
    id: string;
  };
  "/reports"?: {};
}

export enum Path {
  HOME = "/",
  PRODUCTS = "/order/:id",
  REPORTS = "/reports",
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
