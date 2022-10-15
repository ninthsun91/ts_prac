import { Router } from "express";


const router = Router();


router.get("/", (req, res, next)=>{
    console.log("USER ROUTER");

    res.json({
        message: "USER ROUTER"
    });
});


export default router;