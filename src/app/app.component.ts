import {Component} from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from './Product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';
    name: string;

    ingredients: Array<string> = [
        'Ingr 1',
        'Ingr 2',
        'Ingr 3'
    ];

    equivalents: Array<string> = [
        'Eq 1',
        'Eq 2',
        'Eq 3'
    ];

    constructor(public prod_service: ProductsService) {
    }

    buyProduct(prod: Product) {
        this.prod_service.addToCart(prod);
    }

}
