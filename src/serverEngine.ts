import mongoose from 'mongoose';

export class MongoDatabase {
    mongo?: mongoose.Mongoose;
    constructor(private readonly connectionString: string) { }
    async connect() {
        if (mongoose.connection.readyState === 0) {
            this.mongo = await mongoose.connect(
                this.connectionString,
                {
                    useNewUrlParser: true,
                    poolSize: 10,
                    useCreateIndex: false,
                    useFindAndModify: false,
                    bufferCommands: false,
                    bufferMaxEntries: 0,
                    autoReconnect: true,
                    reconnectTries: Number.MAX_SAFE_INTEGER
                } // to make findOneAndUpdate as native, see "https://mongoosejs.com/docs/connections.html"
            );
        }
    }
    async disconnect() {
        if (this.mongo) {
            await this.mongo.disconnect();
        }
    }
}


export class ServerEngine {
    private database: any;

    async initServices(): Promise<void> {
        this.database = new MongoDatabase('mongodb://127.0.0.1:27017/Promotions' as string);
        await this.database.connect();
    }
    async stopServices(): Promise<void> {
        await this.database.disconnect();
    }

}
