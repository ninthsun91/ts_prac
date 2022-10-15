import { Request, Response, NextFunction } from "express"
import Users from "../database/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import env from "../config.env";


interface User {
    userId?: number;
    username: string;
    password: string;
    nickname: string;
    createdAt?: string;
    updatedAt?: string;
}

interface Payload {
    userId: number;
    username: string;
}


export default {
    allUsers: async function(req: Request, res: Response, next: NextFunction) {
        console.log("ALLUSERS CONTROLLER");

        const userList = await Users.findAll();

        res.json({
            message: "USER ROUTER",
            userList
        });
    },
    signup: async function(req: Request, res: Response, next: NextFunction) {
        console.log("SIGNUP CONTROLLER");

        const { username, password, nickname } = req.body;
        const user: User = {
            username, 
            password: await bcrypt.hash(password, 10),
            nickname
        }

        const result = await Users.create(user);
        res.cookie("userId", result.get().userId);

        res.json({
            result
        });
    },
    signin: async function(req: Request, res: Response, next: NextFunction) {
        console.log("SIGNIN CONTROLLER");

        const { username, password } = req.body;
        
        const user: User | null = await Users.findOne({ 
            where: { username } 
        });
        if (user === null) {
            throw new Error("아이디, 비밀번호가 잘못되었습니다")
        }
        
        const passCheck = await bcrypt.compare(password, user.password);
        if (!passCheck) {
            throw new Error("아이디, 비밀번호가 잘못되었습니다")
        }

        const payload: Payload = {
            userId: user.userId!,
            username: user.username,
        }
        const token = jwt.sign(payload, env.JWT_KEY, {
            algorithm: "HS256",
            expiresIn: 60*10
        });

        res.cookie("auth", "Bearer " + token);
        res.json({
            message: "SUCCESS"
        });
    }
}