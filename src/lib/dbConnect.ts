import mongoose from 'mongoose';
import { printErr, printLog } from './logError';

type ConnectionObj = {
    isConnected?: number;
}

const connection: ConnectionObj = {};

async function dbConnect():Promise<void> {
    if (connection.isConnected) {
        printLog('Already connected to the database');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string || '', {});

        connection.isConnected = db.connections[0].readyState;
        printLog('Database connected successfully');
    } catch (error) {
        printErr(`Database connection failed: ${error}`);
        throw new Error('Failed to connect to the database');
    }
}

export default dbConnect;