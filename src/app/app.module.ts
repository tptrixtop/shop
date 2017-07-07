import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {
    MdMenuModule, MdToolbarModule, MdGridListModule, MdDialog, MdDialogModule
} from '@angular/material';
import {MdButtonModule, MdNativeDateModule} from '@angular/material';

import {MdInputModule, MdSelectModule, MdCheckboxModule, MdCardModule, MdTableModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductsService} from './products.service';
import {CartComponent} from './cart/cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CartComponent,
        AddProductDialogComponent
    ],
    imports: [
        BrowserModule,
        MdMenuModule,
        MdToolbarModule,
        MdGridListModule,
        MdButtonModule,
        FormsModule,
        MdDialogModule,
        NoopAnimationsModule,
        MdNativeDateModule,
        ReactiveFormsModule,
        MdInputModule,
        MdSelectModule,
        MdCheckboxModule,
        MdCardModule,
        MdTableModule
    ],
    entryComponents: [
        AddProductDialogComponent
    ],
    providers: [ProductsService, MdDialog],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
