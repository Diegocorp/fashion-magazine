import React, { FC } from "react";
import Post from "../Post";
import { PostsStyles } from "./PostsElements";

const Posts: FC<any> = ({ posts }) => {
  return (
    <PostsStyles>
      {posts.map((p: any) => (
        <Post post={p} />
      ))}
    </PostsStyles>
  );
};

export default Posts;
