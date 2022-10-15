import express from "express";
import userRouter from "./routes/user";
import env from "./config.env"

const app = express();


app.use(express.json());

app.use("/user", userRouter);


app.get("/", (req, res, next)=>{
   console.log("INDEX");

   res.json({
    message: "INDEX PAGE"
   });
});


app.listen(env.PORT, ()=>{
    console.log(env);
    console.log("SERVER RUNNING on " + env.PORT);
});