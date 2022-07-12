/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { NetworkValidationModal } from "./components/modal/NetworkValidationModal";
import { useModal } from "./hook";
import { useFetchUser } from "./hook/query";
import {
  LoginPage,
  MainPage,
  RegisterStep1Page,
  RegisterStep2Page,
  RegisterStep3Page,
  HackathonMainPage,
  JoinPage,
} from "./pages";

export const App: React.FC = () => {
  const { data: user, isSuccess } = useFetchUser();
  const { addModal, removeCurrentModal } = useModal();

  useEffect(() => {
    if (!user?.result.networkVerified && isSuccess)
      return NetworkValidationModal({ addModal, removeCurrentModal });
    return undefined;
  }, [isSuccess]);

  return (
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
        <Route path="join">
          <Route index element={<JoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
