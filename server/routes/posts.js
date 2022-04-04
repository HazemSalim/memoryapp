const express = require("express");

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPostsBySearch,
} = require("../controllers/posts.js");

const auth = require("../middleware/auth.js");

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.get("/:id", auth, getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

module.exports = router;
