import { Router } from "express";
import User from "../controllers/user";


const router = Router();


router.route("/")
    .get(User.signin)
    .post(User.signup);

router.route("/list")
    .get(User.allUsers)


export default router;