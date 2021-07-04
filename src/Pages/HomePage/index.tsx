import React from "react";
import Header from "../../Components/Header";
import Posts from "../../Components/Posts";
import SideColumn from "../../Components/SideColumn";
import { HomePageStyles } from "./HomePageElements";

export default function HomePage() {
  return (
    <HomePageStyles>
      <Header />
      <div className="home">
        <Posts />
        <SideColumn />
      </div>
    </HomePageStyles>
  );
}
