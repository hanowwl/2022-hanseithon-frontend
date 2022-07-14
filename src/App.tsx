/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { instance } from "./api";
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
  // JoinPage,
  InternalPage,
  SubmitPage,
} from "./pages";

export const App: React.FC = () => {
  const { data: user, isSuccess } = useFetchUser();
  const { addModal, removeCurrentModal } = useModal();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/internal") return;
    if (!user?.result.networkVerified && isSuccess)
      return NetworkValidationModal({
        addModal,
        removeCurrentModal,
        accessToken,
      });

    return () => {
      if (!user?.result.networkVerified && isSuccess) removeCurrentModal();
    };
  }, [isSuccess, accessToken]);

  useEffect(() => {
    if (instance.defaults.headers.common.Authorization)
      setAccessToken(
        instance.defaults.headers.common.Authorization.toString().split(" ")[1],
      );
  }, [instance.defaults.headers.common.Authorization]);

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
        {/* <Route path="join">
          <Route index element={<JoinPage />} />
        </Route> */}
        <Route path="internal">
          <Route index element={<InternalPage />} />
        </Route>
        <Route path="submit">
          <Route index element={<SubmitPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
