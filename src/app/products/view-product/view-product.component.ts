import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  productId=0;
  productData!:Product;

  constructor(private activatedRoute: ActivatedRoute ,
              private productService:ProductService){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data['id'];
      console.log(' this.productId :',this.productId)
    });

   this.productService.viewProductById(this.productId).subscribe(prod=>{
     this.productData=prod;

     console.log('this.productData :',this.productData)
     console.log('this.productData.productName :',this.productData['productName'])
   })
  }

}
