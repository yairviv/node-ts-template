import mongoose from 'mongoose';
import { PromotionSchema } from "./validations/promotionSchema";
import { IPromotionsRepository } from './Interfaces/IPromotionsRepository';
import Promotion from '../Models/Promotion';

export class PromotionsRepository implements IPromotionsRepository {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/Promotions', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }

    async insertPromotion(promotion: Promotion): Promise<any> {
        var Promotion = mongoose.model('Promotion', PromotionSchema);
        var newPromotion = new Promotion({ key: promotion.key, value: promotion.value });
        await newPromotion.save(function (err, newPromotion) {
            if (err) return console.error(err);
        });
        return newPromotion;
    }
}

