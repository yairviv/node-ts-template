import mongoose from 'mongoose';
export declare class MongoDatabase {
    private readonly connectionString;
    mongo?: mongoose.Mongoose;
    constructor(connectionString: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
export declare class ServerEngine {
    private database;
    initServices(): Promise<void>;
    stopServices(): Promise<void>;
}
