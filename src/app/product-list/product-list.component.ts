import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule, NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products : Product[]

  constructor(private productService: ProductService){};

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("Reload data de productos!!!");
    this.productService.getProductList().subscribe(products => this.products = products);
  }


}
