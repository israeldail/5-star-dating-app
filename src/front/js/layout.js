import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar1 } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cards } from "./component/cards";
import { Status } from "./pages/statuspage";
import { IntroductionPage } from "./pages/introduction";
import { RegistrationPage } from "./pages/registration";
import { Profile } from "./pages/profile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar1 />

          <Routes>
            <Route element={<Login />} path="/login" />
            {/* <Route element= {<ProfilePage/>} path="/profile"/> */}
            <Route element={<IntroductionPage />} path="/introduction" />
            <Route element={<RegistrationPage />} path="/registration" />
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Status />} path="/status/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
