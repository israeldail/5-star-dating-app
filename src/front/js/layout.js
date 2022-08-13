import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dates } from "./pages/Dates";
import { Inbox } from "./pages/Inbox";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";

import { Navbar1 } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cards } from "./component/cards";
import { Status } from "./pages/statuspage";
import { IntroductionPage } from "./pages/introduction";
import { RegistrationPage } from "./pages/registration";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
          <Navbar1 />

          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<IntroductionPage />} path="/introduction"/>
            <Route element={<RegistrationPage />} path="/registration"/>
            <Route element={<Home />} path="/" />
            <Route element={<Status />} path="/profile/:id"/>
            <Route element={<Inbox />} path="/inbox"/>
            <Route element={<Dates />} path="/profile/:id/dates"/>
            <Route element={<h1>Not found!</h1>} /> 
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
