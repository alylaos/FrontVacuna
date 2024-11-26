import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {

product: Product = new Product();

constructor(private productService: ProductService, private router: Router){}

ngOnInit(): void {
  
}

save(){
  console.log("Registrando un producto.");
  this.productService.createProduct(this.product).subscribe(
    data => this.router.navigate(['/list'])
  );
  console.log("continuamos con la navegación.");
}

}
