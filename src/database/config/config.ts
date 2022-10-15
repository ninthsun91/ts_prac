import { Sequelize } from "sequelize";
import env from "../../config.env";


const DB_HOST = env.DB_HOST || "";
const DB_NAME = env.DB_NAME || "";
const DB_USER = env.DB_USER || "";
const DB_PASSWORD = env.DB_PASSWORD;

const sequelize = new Sequelize(
    DB_NAME, 
    DB_USER, 
    DB_PASSWORD, 
    {
        host: DB_HOST,
        dialect: "mysql"
    }
);


export default sequelize;