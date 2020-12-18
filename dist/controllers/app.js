"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initExpressServer = exports.appFactory = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const promotionsRepository_1 = require("../DataAccess/promotionsRepository");
const promotionsService_1 = require("../services/promotionsService");
const promotionsController_1 = require("./webApi/routes/promotionsController");
const app = initExpressServer();
const appFactory = () => {
    const promotionsRepository = new promotionsRepository_1.PromotionsRepository();
    const promotionsService = new promotionsService_1.PromotionsService(promotionsRepository);
    const promotionsRouter = promotionsController_1.promotionsRoute(promotionsService);
    app.use('/promotions', promotionsRouter);
    return app;
};
exports.appFactory = appFactory;
function initExpressServer(msConfig) {
    const app = express_1.default();
    return app
        .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    })
        .use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
        next();
    })
        .use((req, res, next) => {
        res.header('Access-Control-Allow-Headers', '*');
        next();
    })
        .use(body_parser_1.default.urlencoded())
        .use(body_parser_1.default.json());
}
exports.initExpressServer = initExpressServer;
//# sourceMappingURL=app.js.map