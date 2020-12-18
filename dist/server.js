"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const serverEngine_1 = require("./serverEngine");
const signals_1 = require("./utils/signals");
const app_1 = require("./controllers/app");
const serverEngine = new serverEngine_1.ServerEngine();
let app;
let server;
let promise = serverEngine.initServices();
promise.then(() => {
    app = app_1.appFactory();
    server = app.listen(5000, () => {
        console.log(`Listening on *:${5000}`);
    });
});
const shutdown = signals_1.init(async () => {
    await serverEngine.stopServices();
    await server.close();
});
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
//# sourceMappingURL=server.js.map