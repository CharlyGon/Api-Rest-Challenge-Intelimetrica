import { Application } from 'express';
import { databaseConnection } from '../db/sequelize';

const startServer = async (app: Application): Promise<void> => {
    try {
        await databaseConnection();
        const port = process.env.PORT ?? 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}

export { startServer };
