import { Application } from 'express';
import { databaseConnection } from '../db/dbConnection';
import { DBConfig } from '../utils/enums';
require('dotenv').config();

const waitForDatabase = async (): Promise<void> => {
    let retries = 0;

    while (retries < DBConfig.MAX_RETRIES) {
        try {
            console.log(`Attempted connection to database number ${retries + 1}...`);
            await databaseConnection();
            console.log("Successful connection to the database.");
            return;
        } catch (error) {
            console.error("Error when connecting to the database:", error);
            retries++;
            await new Promise(resolve => setTimeout(resolve, DBConfig.RETRY_INTERVAL));
        }
    }

    console.error(`Could not connect to database after ${DBConfig.MAX_RETRIES} attempts. Application will be closed.`);
    process.exit(1);
};

/**
 * Start the server.
 * @param app The Express application to start.
 */
export const startServer = async (app: Application): Promise<void> => {
    try {
        await waitForDatabase();
        const port = parseInt(process.env.PORT ?? '3000');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error when starting the server:', error);
        process.exit(1);
    }
};
