import React, { FC } from "react";
import Header from "../../Components/Header";
import Posts from "../../Components/Posts";
import SideColumn from "../../Components/SideColumn";
import { HomePageStyles } from "./HomePageElements";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage: FC<any> = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <HomePageStyles>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideColumn />
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
