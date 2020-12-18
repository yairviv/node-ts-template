import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { PromotionsRepository } from '../DataAccess/promotionsRepository'
import { PromotionsService } from '../services/promotionsService';
import { promotionsRoute } from './webApi/routes/promotionsController'


const app = initExpressServer();

export const appFactory = () => {
    const promotionsRepository = new PromotionsRepository();
    const promotionsService = new PromotionsService(promotionsRepository);
    const promotionsRouter = promotionsRoute(promotionsService);
    app.use('/promotions', promotionsRouter);

    return app;
};

export function initExpressServer(msConfig?: any) {
    const app = express();
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
        .use(bodyParser.urlencoded())
        .use(bodyParser.json());
}