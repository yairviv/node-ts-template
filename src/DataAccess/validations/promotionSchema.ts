import { Schema } from 'mongoose';

// tslint:disable-next-line:variable-name
export const PromotionSchema: Schema = new Schema({
    key: { type: String, required: true, unique: false },
    value: { type: Object, required: true },
});
