import express from "express";
import cookieParser from "cookie-parser"
import env from "./config.env"
import indexRouter from "./routes/index";
import sequelize from "./database/config/config";
import associate from "./database/config/associate";


const app = express();


app.use(express.json());
app.use(cookieParser());

app.use("/", indexRouter);


app.listen(env.PORT, async()=>{
    console.log("SERVER RUNNING on " + env.PORT);
    try {
        await sequelize.authenticate();
        associate.associate();
        console.log("DB CONNECTED");
    } catch (error: any) {
        console.log("DB CONNECTION FAIL: " + error.message);
    };
});
