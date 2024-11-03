import React from "react";
import Today from "./src/components/pages/today";
import { TopBarDTO } from "./src/interfaces/dto";

const AppRoutes = [
  {
      index: true,
      element: <Today sendLocation={(dto) => dto} />
  },
  // {
  //     index: '/mtip',
  //     element: <Lab2 />
  // },
  // {
  //     path: '/mtip/lab2',
  //     element: <Lab2 />
  // },
];

export default AppRoutes;