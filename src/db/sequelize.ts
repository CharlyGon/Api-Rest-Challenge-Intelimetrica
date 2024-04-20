import { Sequelize } from "sequelize";

// Configuration for the database connection
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "3306"),
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "gonza",
    database: process.env.DB_NAME ?? "dbChallenge",
});

const databaseConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export { sequelize, databaseConnection };
