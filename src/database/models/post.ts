import { Model, DataTypes,
    InferAttributes, InferCreationAttributes, ForeignKey, CreationOptional } from "sequelize";
import sequelize from "../config/config";


class Posts extends Model<InferAttributes<Posts>, InferCreationAttributes<Posts>> {
    declare postId: CreationOptional<number>;
    declare userId: ForeignKey<number>;
    declare title: string;
    declare content: string;
}

Posts.init({
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: "Users",
            key: "userId"
        }
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: true,
});


export default Posts;