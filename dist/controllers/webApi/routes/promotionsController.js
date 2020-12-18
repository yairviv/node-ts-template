"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = exports.promotionsRoute = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function promotionsRoute(promotionsService) {
    router.route('/').post(createPromotion());
    function createPromotion() {
        return asyncWrapper(async (req, res) => {
            let model = req.body;
            let result = await promotionsService.createPromotion(model);
            res.json(result);
        });
    }
    return router;
}
exports.promotionsRoute = promotionsRoute;
function asyncWrapper(fn) {
    return async (req, res, next) => {
        try {
            await fn(req, res);
            return;
        }
        catch (err) {
            next(err);
        }
    };
}
exports.asyncWrapper = asyncWrapper;
//# sourceMappingURL=promotionsController.js.map