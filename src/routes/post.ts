import { Router } from "express";
import Posts from "../database/models/post";
import Users from "../database/models/user";


const router = Router();


interface Post {
    userId: number;
    title: string;
    content: string;
}

router.route("/")
    .get(async(req, res, next)=>{
        console.log("GET POST");

        const postList = await Posts.findAll({
            include: Users
        });

        res.json({
            postList
        });
    })
    .post(async(req, res, next)=>{
        console.log("POST POST");

        const { userId } = req.cookies;
        const { title, content } = req.body;
        const post: Post = { userId, title, content };
        console.log(post);

        try {
            const result = await Posts.create(post);
            console.log(result);
    
            res.json({
                message: "SUCCESS",
                result
            });
            
        } catch (error: any) {
            res.json({
                message: error.message
            });
        }
    });


export default router;