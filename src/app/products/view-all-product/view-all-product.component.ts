import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements  OnInit{

  productList:Array<Product>=[];

  constructor(private productService:ProductService){
  }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(products=>{
      this.productList=products;
      console.log(this.productList)
    });
  }
}
