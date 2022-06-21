import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "src/pages";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
