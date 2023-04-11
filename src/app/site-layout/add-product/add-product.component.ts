import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';


import {FormBuilder, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Product} from "../../products/product";
import {ProductService} from "../../products/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{

  //This is two way binding
  /*
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
   */

  //This  is one way binding

  //@ViewChild('template')template:any=null;
  @ViewChild('template')template:any;
  modalRef?:BsModalRef;

  productForm;
  products:Array<Product>=[];
  editMode=false;

  updateProductIndex=0;

constructor(private formBuilder:FormBuilder,
            private modalService:BsModalService,
            private productService:ProductService){

  this.productForm= this.formBuilder.group({
    id:[''],
    productName: [''
    /*  ,[
      Validators.required,
      Validators.minLength(4)
    ]*/
    ],
    categoryId:[''],
    description:[''],
    price:[0],
    rating:[''],
    productImg:[''],
    isAvailable:[false],
    color:[''],
    reviews:[0],
  });


  this.productService.viewAllProduct().subscribe(products=>{
    this.products=products;
    console.log('products :',products);
  })
}

  newProductClick()
  {
    this.editMode = false;
    this.productForm.reset();
    this.openModal(this.template);
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }


  closeProductModal()
  {
    this.modalRef?.hide();
  }

  editBtnClick(index:number)
  {
    this.updateProductIndex=index;//this is   also  id

    console.log("Edit Product ",this.products[index]);
    let product = this.products[index];
    this.productForm.patchValue({...product});
    this.editMode = true;
    this.modalRef = this.modalService.show(this.template);

  }

  saveOrUpdateProduct()
  {
    let product = this.productForm.value as Product;
    console.log("PRODUCT :",product)
    if(this.editMode == false)
    {
      console.log('New product :',product)
     // console.log('ProductName ',this.productForm.value);

      this.productService.createProduct(product).subscribe();
      this.productForm.reset();
    }

    else
    {
      console.log('Update product');


      this.productService.updateProduct(this.updateProductIndex,product);
    }
    this.modalRef?.hide();
  }

  get productFormControl()
  {
    return this.productForm.controls;
  }
}
