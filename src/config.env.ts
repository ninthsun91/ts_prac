import dotenv from "dotenv";

dotenv.config();


interface env {
    PORT: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    JWT_KEY: string;


}

const env: env = {
    PORT: process.env.PORT!,

    DB_HOST: process.env.DB_HOST || "127.0.0.1",
    DB_NAME: process.env.DB_NAME || "name",
    DB_USER: process.env.DB_USER || "user",
    DB_PASSWORD: process.env.DB_PASSWORD || "password",

    JWT_KEY: process.env.JWT_KEY || "secret key"
}

export default env;