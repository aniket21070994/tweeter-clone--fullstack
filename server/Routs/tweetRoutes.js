import express from "express"
import { creatTweet, deleteTweet, getAllTweets, getFollowingTweet, likeOrDislike } from "../Controller/tweetController.js";
import { isAuthenticated } from "../middelware/auth.js";
import { bookmark } from "../Controller/userController.js";
const router = express.Router()

router.route("/create").post(isAuthenticated, creatTweet)
router.route("/delete/:id").delete(isAuthenticated, deleteTweet)
router.route("/like/:id").put(isAuthenticated, likeOrDislike)
router.route("/tweets/:id").get(isAuthenticated, getAllTweets)
router.route("/ftweets/:id").get(isAuthenticated, getFollowingTweet)
export default router