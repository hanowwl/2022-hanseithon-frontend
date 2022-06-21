import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
