import { IPromotionsService } from '../services/interfaces/IPromotionsService';
import { IPromotionsRepository } from '../DataAccess/Interfaces/IPromotionsRepository';
import { Promotion } from '../Models/Promotion';
export class PromotionsService implements IPromotionsService {
    constructor(
        private relationRepository: IPromotionsRepository,
    ) { }

    async createPromotion(promotion: Promotion): Promise<Promotion> {
        return await this.relationRepository.insertPromotion(promotion);
    }
}