import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import ProspectoContainer from "./pages/prospectos/ProspectoContainer";
import ProspectoNew from "./pages/prospectos/ProspectoNew";
import ProspectoInfo from "./pages/prospectos/ProspectoInfo";

import Error404 from "./pages/error404/Error404";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <Sidebar />
        <div className="content-wrapper">
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={ProspectoContainer} />
                <Route exact path="/prospecto/new" component={ProspectoNew} />
                <Route exact path="/prospecto/info" component={ProspectoInfo} />
                <Route component={Error404} />
              </Switch>
            </BrowserRouter>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
