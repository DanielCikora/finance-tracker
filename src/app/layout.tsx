"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang='en'>
        <body>
          <ToastContainer />
          {children}
        </body>
      </html>
    </Provider>
  );
}
