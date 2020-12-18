import dotenv from 'dotenv';
dotenv.config();
import { ServerEngine } from './serverEngine';
import { init } from './utils/signals';
import { appFactory } from './controllers/app';

const serverEngine = new ServerEngine();
let app: any;
let server: any;
let promise = serverEngine.initServices();
promise.then(() => {
    app = appFactory();

    server = app.listen(5000, () => {
        console.log(`Listening on *:${5000}`);
    });
});

const shutdown = init(async () => {
    await serverEngine.stopServices();
    await server.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
