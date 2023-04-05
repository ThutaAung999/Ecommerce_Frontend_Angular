import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../products/product.service";
import {Category} from "../Category";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  categoryList:Array<Category>=[];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getCategory().subscribe(categories=>{
    this.categoryList=categories;
    // console.log(this.categoryList)
    })
  }
}
