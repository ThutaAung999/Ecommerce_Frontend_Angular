import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProductService} from "../../products/product.service";
import {Category} from "../Category";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

import {FormBuilder} from "@angular/forms";
import {Product} from "../../products/product";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  categoryList:Array<Category>=[];


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

  ngOnInit(): void {
    this.productService.getCategory().subscribe(categories=>{
    this.categoryList=categories;
    // console.log(this.categoryList)
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

  closeProductModal() {
    this.modalRef?.hide();
  }

  editBtnClick(index:number) {
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
