import express from "express";
import { userSchema } from "../models/User";
import { postSchema } from "../models/Post";

const router = express.Router();
const Post = postSchema;
const User = userSchema;

//Create new post
router.post("/", async (req: any, res: any) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update post
router.put("/:id", async (req: any, res: any) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete post
router.delete("/:id", async (req: any, res: any) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get post
router.get("/:id", async (req: any, res: any) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all posts
router.get("/", async (req: any, res: any) => {
  const username = req.query.user;
  const category = req.query.cat;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
