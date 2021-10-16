import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./pages/mainPage.jsx";
import CreatePage from "./pages/createPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/create" component={CreatePage} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
