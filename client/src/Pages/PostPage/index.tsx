import React from "react";
import SideColumn from "../../Components/SideColumn";
import SinglePost from "../../Components/SinglePost";
import { PostPageStyles } from "./PostPageElements";

export default function PostPage() {
  return (
    <PostPageStyles>
      <SinglePost />
      <SideColumn />
    </PostPageStyles>
  );
}
