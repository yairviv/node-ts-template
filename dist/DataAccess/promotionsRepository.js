"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const promotionSchema_1 = require("./validations/promotionSchema");
class PromotionsRepository {
    constructor() {
        mongoose_1.default.connect('mongodb://127.0.0.1:27017/Promotions', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }
    async insertPromotion(promotion) {
        var Promotion = mongoose_1.default.model('Promotion', promotionSchema_1.PromotionSchema);
        var newPromotion = new Promotion({ key: promotion.key, value: promotion.value });
        await newPromotion.save(function (err, newPromotion) {
            if (err)
                return console.error(err);
        });
        return newPromotion;
    }
}
exports.PromotionsRepository = PromotionsRepository;
//# sourceMappingURL=promotionsRepository.js.map