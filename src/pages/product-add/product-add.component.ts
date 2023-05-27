import { Component } from '@angular/core';
import { IProduct } from 'src/interface/Product';
import { ProductService } from 'src/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
  });
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
      };
      this.productService.addProduct(product).subscribe((product) => {
        console.log('Thành công', product);
        this.router.navigate(['/admin/product']);
      });
    }
  }
}
