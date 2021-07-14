import React from "react";
import NavBar from "./Components/NavBar";
import SinglePost from "./Components/SinglePost";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import WritePage from "./Pages/WritePage";
import SettingsPage from "./Pages/SettingsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/post/:postId">
          <SinglePost />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/write">
          <WritePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
