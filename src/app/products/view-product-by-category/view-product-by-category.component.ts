import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../site-layout/Category";

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit{

  searchCategory!:string;

  productList:Array<Product>=[];

  //product!:Product;

//  searchCategory1!:Category;


  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService){
  }

  ngOnInit(): void {
    /*this.activatedRoute.queryParams.subscribe(category=> {*/
    //difference  between  params  and queryParam in Angular
    this.activatedRoute.params.subscribe(category=> {
      console.log('category: ',category)

//    this.searchCategory1= category.id;
      this.searchCategory = category['id'] as string;

      console.log('searchCategory: ',this.searchCategory)

      //this.productService.searchCategoryProduct(this.searchCategory1)
      this.productService.searchCategoryProduct(this.searchCategory)
                                                      .subscribe(categoryData => {
          this.productList = categoryData;
          //this.product=categoryData;
          console.log(this.productList)
      })
    })
  }
}
