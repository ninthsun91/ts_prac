import { Request, Response, NextFunction } from "express";
import Posts from "../database/models/post";
import Users from "../database/models/user";

interface Post {
    postId?: number;
    userId: number;
    title: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
}

export default {
    writePost: async function(req: Request, res: Response, next: NextFunction) {
        console.log("WRITEPOST CONTROLLER");

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
    },
    allPosts: async function(req: Request, res: Response, next: NextFunction) {
        console.log("ALLPOSTS CONTROLLER");

        const postList = await Posts.findAll({
            include: Users
        });

        res.json({
            postList
        });
    },
    findPost: async function(req: Request, res: Response, next: NextFunction) {
        console.log("FINDPOST CONTROLLER");

        const { postId } = req.params;
        const post = await Posts.findByPk(postId, {
            include: {
                model: Users,
                attributes: {
                    exclude: ["password"]
                }
            }
        });

        if (!post) throw new Error("게시글을 찾을 수 없습니다.");

        res.json({
            post
        });
    },
}