import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/interface/Product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('delete thanhf cong');
    });
  }
}
