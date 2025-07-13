import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./modules/Redux/store";
import { Header } from "./Views/Header";
import { HandleRefresh } from "./Views/HandleRefresh";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import "./index.scss";

const domain = window.location.hostname; // Used to view the hostname you are in.
let rootPath = ""; // rootpath needs to be blank and able to change
if (domain === "xasbus.github.io") rootPath = "/NBFletes";
// Basically says if my rootpath is ^ then add /NBFletes which is the repository name I chose.
// If the domain isn't that. Then leave it blank

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HandleRefresh>
        <Header />
        <Routes>
          <Route path={`${rootPath}/`} element={<Home />} />
          <Route path={`${rootPath}/home`} element={<Home />} />
          <Route path={`${rootPath}/index.html`} element={<Home />} />
          <Route path={`${rootPath}/404.html`} element={<Home />} />
          <Route path={`${rootPath}/about`} element={<About />} />
        </Routes>
      </HandleRefresh>
    </BrowserRouter>
  </Provider>
);
