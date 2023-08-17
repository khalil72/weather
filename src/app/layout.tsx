"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";
import { theme } from "@/utils/theme";
import { persistStore } from "redux-persist";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/component/common/loader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const persistor = persistStore(store);
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
