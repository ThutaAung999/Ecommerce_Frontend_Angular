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

  productId!:string;
//  productData = {} as Product;
  productData !:Product;

  productList:Array<Product>=[];
  constructor(private activatedRoute: ActivatedRoute,
              private productService:ProductService) {

  }

  ngOnInit(): void {

    console.log('ngOnInit   in view product by id ')

    this.activatedRoute.params.subscribe(data=> {
      //this.productId=data['id'];
      this.productId = data.id;
      console.log(' this.productId :', this.productId)//OK

      this.productService.viewProductById(this.productId).subscribe((prod:Product)=>{
        console.log('prod:',prod)//OK
        console.log('prod.productName::::::',prod.productName)//undefined

        this.productData=prod;

        console.log('this.productData :',this.productData.productName)
        console.log('this.productData.productName :',(this.productData.productName))//undefined
      })
      })
  }
}
