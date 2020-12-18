import express, { Request, Response, NextFunction } from 'express';
import { IPromotionsService } from '../../../services/Interfaces/IPromotionsService'

const router = express.Router();
export function promotionsRoute(promotionsService: IPromotionsService) {
    router.route('/').post(createPromotion());

    function createPromotion() {
        return asyncWrapper(async (req: Request, res: Response) => {
            let model = req.body;
            let result = await promotionsService.createPromotion(model);
            res.json(result);
        });
    }
    return router;
}

export function asyncWrapper(fn: (req: Request, res: Response) => any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res);
            return;
        } catch (err) {
            next(err);
        }
    };
}