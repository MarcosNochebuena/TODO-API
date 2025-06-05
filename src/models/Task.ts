import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM("pending", "in_progress", "completed"),
        allowNull: false,
        defaultValue: "pending"
    }
}, {
    timestamps: true,
    tableName: "tasks"
});

export default Task;
