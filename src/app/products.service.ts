import {Injectable} from '@angular/core';
import {Product, Categories} from './Product';

@Injectable()
export class ProductsService {

    public products: Array<Product> = [];
    public products_in_cart: Array<Product> = [];

    constructor() {
    }

    getProducts(): Array<Product> {
        return this.products;
    }

    addProduct(prod: Product) {
        this.products.push(prod);
    }

    addToCart(prod: Product) {
        this.products_in_cart.push(prod);
    }

}
