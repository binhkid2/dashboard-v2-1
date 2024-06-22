import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DashboardLayout } from "./components/Layout";
import {NextUIProvider} from '@nextui-org/react'
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <NextUIProvider>
    <Router>
      <DashboardLayout>
        <App />
      </DashboardLayout>
    </Router>
    </NextUIProvider>
  </React.StrictMode>
);