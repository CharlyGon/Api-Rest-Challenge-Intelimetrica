import { sequelize } from "./dbConfig";

/**
 * Establishes a connection to the database and synchronizes the models.
 */
export const databaseConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
