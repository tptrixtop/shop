import {Component, OnInit, Input} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AddProductDialogComponent} from '../add-product-dialog/add-product-dialog.component';
import {ProductsService} from '../products.service';
import {Product} from '../Product';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() prod: Product = new Product('', '', 0, null, false);

    constructor(
        public dialog: MdDialog,
        public prod_service: ProductsService
    ) {}

    ngOnInit() {
    }

    showAddProductDialog() {
        this.dialog.open(AddProductDialogComponent, {
            width: '900px',
        });
    }

    addProduct(e) {
        this.prod_service.addProduct(this.prod);
        return false;
    }


}

