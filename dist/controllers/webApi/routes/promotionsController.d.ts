import { Request, Response, NextFunction } from 'express';
import { IPromotionsService } from '../../../services/Interfaces/IPromotionsService';
export declare function promotionsRoute(promotionsService: IPromotionsService): import("express-serve-static-core").Router;
export declare function asyncWrapper(fn: (req: Request, res: Response) => any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
