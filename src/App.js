import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterDetail from "./components/CharacterDetail";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character/:id" component={CharacterDetail} />
    </main>
  );
}
