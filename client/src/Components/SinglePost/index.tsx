import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SinglePostStyles } from "./SinglePostElement";

export interface typesPost {
  title: string;
  description: string;
  photo: string;
  username: string;
  createdAt: string;
}

const SinglePost: FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState<typesPost>({
    title: "",
    description: "",
    photo: "",
    username: "",
    createdAt: "",
  });

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <SinglePostStyles>
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDescription">{post.description}</p>
      </div>
    </SinglePostStyles>
  );
};

export default SinglePost;
