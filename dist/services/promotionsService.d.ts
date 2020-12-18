import { IPromotionsService } from '../services/interfaces/IPromotionsService';
import { IPromotionsRepository } from '../DataAccess/Interfaces/IPromotionsRepository';
import { Promotion } from '../Models/Promotion';
export declare class PromotionsService implements IPromotionsService {
    private relationRepository;
    constructor(relationRepository: IPromotionsRepository);
    createPromotion(promotion: Promotion): Promise<Promotion>;
}
