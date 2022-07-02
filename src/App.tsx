import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  LoginPage,
  MainPage,
  RegisterStep1Page,
  RegisterStep2Page,
  RegisterStep3Page,
  HackathonMainPage,
} from "./pages";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register">
          <Route path="step1" element={<RegisterStep1Page />} />
          <Route path="step2" element={<RegisterStep2Page />} />
          <Route path="step3" element={<RegisterStep3Page />} />
        </Route>
        <Route
          path="register"
          element={<Navigate replace to="/auth/login" />}
        />
      </Route>
      <Route path="hackathon">
        <Route index element={<HackathonMainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
