import { Promotion } from '../../Models/Promotion';
export interface IPromotionsService {
    createPromotion(promotion: Promotion): Promise<Promotion>;
}
