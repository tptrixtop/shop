export enum Categories {
    Black = 1,
    White = 2
}

export class Product {
    constructor(public name: string,
                public desc: string,
                public price: number,
                public cat: Categories,
                public is_available: boolean) {
    }
}