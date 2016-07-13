export class Recipe {
    name: string;
    type: string;
    cook_time: number;
    ingredients: Array<string>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
