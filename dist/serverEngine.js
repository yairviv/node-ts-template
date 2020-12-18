"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerEngine = exports.MongoDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDatabase {
    constructor(connectionString) {
        this.connectionString = connectionString;
    }
    async connect() {
        if (mongoose_1.default.connection.readyState === 0) {
            this.mongo = await mongoose_1.default.connect(this.connectionString, {
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
exports.MongoDatabase = MongoDatabase;
class ServerEngine {
    async initServices() {
        this.database = new MongoDatabase('mongodb://127.0.0.1:27017/Promotions');
        await this.database.connect();
    }
    async stopServices() {
        await this.database.disconnect();
    }
}
exports.ServerEngine = ServerEngine;
//# sourceMappingURL=serverEngine.js.map