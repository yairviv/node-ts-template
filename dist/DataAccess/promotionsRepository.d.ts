import { IPromotionsRepository } from './Interfaces/IPromotionsRepository';
import Promotion from '../Models/Promotion';
export declare class PromotionsRepository implements IPromotionsRepository {
    constructor();
    insertPromotion(promotion: Promotion): Promise<any>;
}
