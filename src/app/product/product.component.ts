import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'dnt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild(HeaderComponent, { static: true }) headerComponent: HeaderComponent;

  products: Product[] = [
    { id: 1, name: 'One Plus 8', mfd: new Date('11-Apr-2020'), price: 65000 },
    { id: 2, name: 'Blue Microphone', mfd: new Date('11-Mar-2020'), price: 12000 },
    { id: 3, name: 'One Plus 8 Pro', mfd: new Date('11-Apr-2019'), price: 85000 },
  ];

  selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
    this.headerComponent.title = 'Product';
  }

  receiveFromChild(product: Product) {
    this.selectedProduct = product;
  }

  addProduct() {
    // this.headerComponent.title = "New Component";
    const product: Product = {
      id: 4, name: 'IPhone 11', price: 85000, mfd: new Date('11-Jan-2020')
    };

    // this.products.push(product);
    // this.products = this.products.concat([product]);
    this.products = [...this.products, product];
  }

}