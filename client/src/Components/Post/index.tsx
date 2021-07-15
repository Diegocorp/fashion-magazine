import React from "react";
import { PostStyles } from "./PostElements";

export default function Post() {
  return (
    <PostStyles>
      <img className="postImg" src="https://i.imgur.com/nIo9zA1.jpg" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Style</span>
        </div>
        <span className="postTitle">Lorem aliquip velit elit sit ipsum.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Duis minim adipisicing culpa ea exercitation enim proident eiusmod
        occaecat. Laboris proident ullamco nulla eu est officia. Consectetur
        officia et dolore quis adipisicing Lorem ea ut labore quis nulla dolor.
        Lorem nulla anim quis amet occaecat ea velit laboris sunt qui sit eu
        occaecat.
      </p>
    </PostStyles>
  );
}
