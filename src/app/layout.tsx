"use client";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
export const metatata: Metadata = {
  title: "Finance Tracker",
  description: "Finance Tracker App - Next.js, Tailwind, Redux, TypeScript",
  creator: "Daniel Cikora",
};
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
