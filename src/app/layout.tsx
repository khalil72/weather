"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";
import { theme } from "@/utils/theme";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
