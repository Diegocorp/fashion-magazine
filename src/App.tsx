import React from "react";
import { NavBar } from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import WritePage from "./Pages/WritePage";
import SettingsPage from "./Pages/SettingsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <NavBar />
      <RegisterPage />
    </>
  );
}

export default App;
