import { IPromotion } from './interfaces/IPromotion';
export class Promotion implements IPromotion {
    key!: String;
    value!: any;
    constructor(fields?: {}) {
        if (fields) Object.assign(this, fields);
    }
}

export default Promotion;
