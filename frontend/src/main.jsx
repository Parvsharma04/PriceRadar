import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </NextUIProvider>
  </StrictMode>
);
