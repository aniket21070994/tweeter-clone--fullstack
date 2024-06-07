import express from "express"
import { Logout, Login, Register, profile, getOtherUsers, follow, unfollow, uid } from "../Controller/userController.js";
import { isAuthenticated } from "../middelware/auth.js";
import { bookmark } from "../Controller/userController.js";
const router = express.Router();
router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(Logout)
router.route("/bookmark/:id").put(isAuthenticated, bookmark)
router.route("/profile/:id").get(isAuthenticated, profile)
router.route("/otheeuser/:id").get(isAuthenticated, getOtherUsers)
router.route("/follow/:id").post(isAuthenticated,follow)
router.route("/unfollow/:id").post(isAuthenticated,unfollow)
router.route("/uid/:id").get(isAuthenticated,uid)
export default router;