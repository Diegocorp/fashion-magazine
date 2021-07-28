import React, { FC } from "react";
import { PostStyles } from "./PostElements";
import { Link } from "react-router-dom";

const Post: FC<any> = ({ post }) => {
  return (
    <PostStyles>
      {post.photo && <img className="postImg" src={post.photo} />}

      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c: any) => (
            <span className="postCategory">c.name</span>
          ))}
        </div>
        <Link to={`./post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </PostStyles>
  );
};

export default Post;
