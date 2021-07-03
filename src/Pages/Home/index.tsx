import React from "react";
import Header from "../../Components/Header";
import Posts from "../../Components/Posts";
import SideColumn from "../../Components/SideColumn";
import { HomeStyles } from "./HomeElements";

export default function Home() {
  return (
    <HomeStyles>
      <Header />
      <div className="home">
        <Posts />
        <SideColumn />
      </div>
    </HomeStyles>
  );
}
