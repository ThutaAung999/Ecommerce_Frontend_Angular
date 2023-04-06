import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Product} from "./product";
import {Category} from "../site-layout/Category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private httpClient:HttpClient) { }

  createProduct(productBody:Product):Observable<Product>{
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post<Product>(baseUrl,productBody);
  }

  viewAllProduct() :Observable<Product[]>{
    const baseUrl="http://localhost:3000/products";
    return  this.httpClient.get<Product[]>(baseUrl);

  }


   updateProduct(productId:number,productBody:Product):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl,productBody);
  }

   deleteProduct(productId:number):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.delete<Product>(baseUrl);
  }


  viewProductById(productId:string):Observable<Product>
  {
    console.log('productId inside service:',productId)//OK
    //const baseUrl="http://localhost:3000/products?productId="+productId;
    const baseUrl="http://localhost:3000/products?productId="+productId;
    this.httpClient.get<Product>(baseUrl).subscribe(product=>{
      console.log('product.productName inside service',product.productName)
    });//No OK  , return  undefined ,
    return this.httpClient.get<Product>(baseUrl);
  }

  //searchCategoryProduct(categoryId:Category):Observable<Product[]>{
  test(productId:string):Observable<Product>{
    console.log("Inside product.service.ts ",productId )
    const baseUrl="http://localhost:3000/products?productId="+productId;

    /*this.httpClient.get<Product[]>(baseUrl).subscribe(prods=>{
        console.log("product by category :",prods[0].productName)
    });*/
    return this.httpClient.get<Product>(baseUrl);
  }


  //searchCategoryProduct(categoryId:Category):Observable<Product[]>{
  searchCategoryProduct(categoryId:string):Observable<Product[]>{
    console.log("Inside product.service.ts ",categoryId )
    const baseUrl="http://localhost:3000/products?categoryId="+categoryId;

    /*this.httpClient.get<Product[]>(baseUrl).subscribe(prods=>{
        console.log("product by category :",prods[0].productName)
    });*/
    return this.httpClient.get<Product[]>(baseUrl);
  }

  searchDateProduct(dateParams:string):Observable<Product>{
    const baseUrl="http://localhost:3000/products/date="+dateParams;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(){
    const categoryUrl="http://localhost:3000/categories";

    /*this.httpClient.get<Category[]>(categoryUrl).subscribe(categories=>{
      console.log(categories[0].categoryName);
    });*/
    return  this.httpClient.get<Category[]>(categoryUrl);

  }
}
