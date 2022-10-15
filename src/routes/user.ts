import { Router } from "express";
import Users from "../database/models/user";


const router = Router();


interface User {
    username: string;
    password: string;
    nickname: string;
}

router.route("/")
    .get(async(req, res, next)=>{
        console.log("GET USER");

        const userList = await Users.findAll()

        res.json({
            message: "USER ROUTER",
            userList
        });
    })
    .post(async(req, res, next)=>{
        console.log("POST USER");

        const { username, password, nickname } = req.body;
        const user: User = {
            username, password, nickname
        }
        console.log(user);
        const result = await Users.create(user);
        res.cookie("userId", result.get().userId);

        res.json({
            result
        });
    });


export default router;