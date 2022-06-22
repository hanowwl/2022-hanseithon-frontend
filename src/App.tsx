import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import {
  LoginPage,
  MainPage,
  RegisterStep1Page,
  RegisterStep2Page,
  RegisterStep3Page,
} from "./pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App: React.FC = () => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
);
