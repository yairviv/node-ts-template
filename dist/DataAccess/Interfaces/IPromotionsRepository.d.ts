import Promotion from '../../Models/Promotion';
export interface IPromotionsRepository {
    insertPromotion(promotion: Promotion): Promise<any>;
}
