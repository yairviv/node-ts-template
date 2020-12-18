"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const process_1 = __importDefault(require("process"));
const init = (closeFunc) => async () => {
    try {
        await closeFunc();
        process_1.default.exit(0);
    }
    catch (err) {
        process_1.default.exit(1);
    }
};
exports.init = init;
//# sourceMappingURL=index.js.map