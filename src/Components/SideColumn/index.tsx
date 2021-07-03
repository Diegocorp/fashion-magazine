import React from "react";
import { SideColumnStyles } from "./SideColumnElements";

export default function SideColumn() {
  return (
    <SideColumnStyles>
      <div className="sideColumnItem">
        <span className="sideColumnTitle">ABOUT ME</span>
        <img src="https://i.imgur.com/51pkitt.jpg"></img>
        <p>
          Voluptate eiusmod consequat veniam exercitation. Reprehenderit nostrud
          commodo nulla id ullamco cupidatat dolor labore tempor officia. Labore
          incididunt consectetur non elit in laborum ad ex ad fugiat aliquip.
          Consectetur laboris enim cillum officia laboris pariatur occaecat eu.
          Sint aute sint ad dolore amet officia. In excepteur do sunt esse
          ullamco enim qui ut do cupidatat.
        </p>
      </div>
      <div className="sideColumnItem">
        <span className="sideColumnTitle">CATEGORIES</span>
        <ul className="sideColumnList">
          <li className="sideColumnListItem">Life</li>
          <li className="sideColumnListItem">Music</li>
          <li className="sideColumnListItem">Style</li>
          <li className="sideColumnListItem">Cinema</li>
        </ul>
      </div>
      <div className="sideColumnItem">
        <span className="sideColumnTitle">FOLLOW US</span>
        <div className="sideColumnSocial">
          <i className="sideColumnIcon fab fa-twitter-square"></i>
          <i className="sideColumnIcon fab fa-facebook-square"></i>
          <i className="sideColumnIcon fab fa-pinterest-square"></i>
          <i className="sideColumnIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </SideColumnStyles>
  );
}
