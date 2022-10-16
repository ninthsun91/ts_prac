import { Router } from "express";
import Post from "../controllers/post";


const router = Router();


router.route("/")
    .get(Post.allPosts)
    .post(Post.writePost);

router.route("/:postId")
    .get(Post.findPost);


export default router;