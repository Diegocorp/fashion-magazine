import React from "react";
import { HeaderStyles } from "./HeaderElements";

export default function Header() {
  return (
    <HeaderStyles>
      <div className="headerTitles">
        <span className="headerTitleSmall">React & Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img className="headerImg" src="https://i.imgur.com/XyehdmO.jpg"></img>
    </HeaderStyles>
  );
}
