import {Component, OnInit, Input} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ProductsService} from '../products.service';
import {Product} from '../Product';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-add-product-dialog',
    templateUrl: './add-product-dialog.component.html',
    styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

    @Input() prod: Product = new Product('', '', 0, null, false);

    constructor(public dialogRef: MdDialogRef<AddProductDialogComponent>,
                public prod_service: ProductsService) {
    }

    addProduct(e) {
        this.prod_service.addProduct(this.prod);
        this.prod = new Product('', '', 0, null, false);
        return false;
    }

    ngOnInit() {
    }

}

export class ExampleDataSource extends DataSource<any> {

    constructor() {
        super();
    }

    connect(): Observable<Product[]> {

        let a = new Observable<Product[]>(observer => {
           console.log('asd');
        });

        return a;
    }

    disconnect() {}
}
