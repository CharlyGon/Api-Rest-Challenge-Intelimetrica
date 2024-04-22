import { Sequelize } from "sequelize";
require('dotenv').config();

// Configuration for the database connection
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "3306"),
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "gonza",
    database: process.env.DB_NAME ?? "dbChallenge",
});

console.log('Connecting to the database...', process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_NAME);
