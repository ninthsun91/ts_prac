import dotenv from "dotenv";

dotenv.config();


export default {
    PORT: process.env.PORT,

    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,

    JWT_KEY: process.env.JWT_KEY
}