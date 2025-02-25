import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { followUnfollowUser, getAllUsersController, getSuggestedUsers, getUserDetailsController, getUserProfile, updateUser  } from "../controllers/user.controller.js";
import { getUserPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);
router.get("/getUsers",getAllUsersController);
router.get("/:username",getUserDetailsController);
router.get("/:username/posts",getUserPosts);

export default router; 
