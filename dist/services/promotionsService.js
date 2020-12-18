"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsService = void 0;
class PromotionsService {
    constructor(relationRepository) {
        this.relationRepository = relationRepository;
    }
    async createPromotion(promotion) {
        return await this.relationRepository.insertPromotion(promotion);
    }
}
exports.PromotionsService = PromotionsService;
//# sourceMappingURL=promotionsService.js.map