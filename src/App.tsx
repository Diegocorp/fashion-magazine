import React from "react";
import { NavBar } from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import WritePage from "./Pages/WritePage";
import SettingsPage from "./Pages/SettingsPage";

function App() {
  return (
    <>
      <NavBar />
      <SettingsPage />
    </>
  );
}

export default App;
