import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Creators from "./pages/Creators";
import CreatorDetail from "./pages/CreatorDetail";
import Contact from "./pages/Contact";


import "./style.css";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      const isHome = pathname === "/";
      const isContact = pathname === "/contact";

      document.body.classList.toggle("home", isHome);
      document.body.classList.toggle("contactPage", isContact);

      if (isContact) {
        document.body.classList.remove("whitePage");
      } else {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "white") {
          document.body.classList.add("whitePage");
        }
      }
        window.scrollTo(0, 0);
    }, [pathname]);

        return null;
      }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/creator" element={<Creators />} />
          <Route path="/creator/:id" element={<CreatorDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
