import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import { App } from "./App";
import { ModalProvider } from "./components";
import { globalStyles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <ModalProvider />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
