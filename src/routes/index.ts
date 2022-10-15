import { Router } from "express";

import UserRouter from "./user";
import PostRouter from "./post";

const router = Router();


router.get("/", (req, res, next)=>{
    console.log("INDEX");
 
    res.json({
     message: "INDEX PAGE"
    });
 });

router.use("/user", UserRouter);
router.use("/post", PostRouter);


export default router;