import { Model, DataTypes,
    InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "../config/config";


export interface User {
    userId?: number;
    username: string;
    password: string;
    nickname: string | undefined;
}

// class Users extends Model {
//     // declare userId: number;
//     // declare username: string;
//     // declare password: string;
//     // declare nickname: string | undefined;
// }

class Users extends Model<InferAttributes<Users>, InferCreationAttributes<Users>> {
    declare userId: CreationOptional<number>;
    declare username: string;
    declare password: string;
    declare nickname: string;
}

Users.init({
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    nickname: {
        type: DataTypes.STRING(40),
        defaultValue: "바보"
    }
}, {
    sequelize,
    timestamps: true,
});


export default Users;