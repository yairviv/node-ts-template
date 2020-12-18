"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionSchema = void 0;
const mongoose_1 = require("mongoose");
// tslint:disable-next-line:variable-name
exports.PromotionSchema = new mongoose_1.Schema({
    key: { type: String, required: true, unique: false },
    value: { type: Object, required: true },
});
//# sourceMappingURL=promotionSchema.js.map