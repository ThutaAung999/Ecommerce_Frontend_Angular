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

  viewAllProduct() {
    const baseUrl="http://localhost:3000/products";
    return  this.httpClient.get<Product[]>(baseUrl);

  }

  viewProductById(productId:number):Observable<Product>{
    const baseUrl="http://localhost:3000/products?productId="+productId;
    console.log("baseUrl :",baseUrl)

    return this.httpClient.get<Product>(baseUrl);
  }

   updateProduct(productId:number,productBody:Product):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl,productBody);
  }

   deleteProduct(productId:number):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.delete<Product>(baseUrl);
  }

  //searchCategoryProduct(categoryId:Category):Observable<Product[]>{
  searchCategoryProduct(categoryId:string):Observable<Product[]>{
    console.log("Inside product.service.ts ",categoryId )
    const baseUrl="http://localhost:3000/products?categoryId="+categoryId;
    console.log(baseUrl)
    return this.httpClient.get<Product[]>(baseUrl);
  }

  searchDateProduct(dateParams:string):Observable<Product>{
    const baseUrl="http://localhost:3000/products/date="+dateParams;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return  this.httpClient.get<Category[]>(categoryUrl);

  }
}
