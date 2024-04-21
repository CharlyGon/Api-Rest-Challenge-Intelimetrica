import { Sequelize } from "sequelize";

// Configuration for the database connection
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "3306"),
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "gonza",
    database: process.env.DB_NAME ?? "dbChallenge",
});
