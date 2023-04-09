import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private productService:ProductService){}

  ngOnInit(): void {
  }

  addNewProduct(form:any){
    console.log(form.value);


  let newProduct:Product={
    id:"111",//‌add-product  ကို တစ်ခုခေါ်တိုင်း id  ကို တစ်တိုးပေးဖို့ လို။
    categoryId:form.value.product_category,
    productName:form.value.product_name,
    description:form.value.product_description,
    rating:form.value.product_rating,
    price:form.value.product_price,
    productImg:'',
    isAvailable:true,
    color:form.value.product_color,
    reviews:form.value.product_category,

  };

console.log(newProduct);

this.productService.createProduct(newProduct).subscribe(product=>{
  console.log('product :',product);
});
}
}
