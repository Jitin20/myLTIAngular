import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/products/productlist/iproduct';
import { ProductserviceService } from 'src/app/productservice.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  pageTitle: string = 'Product List'
  imageWidth: number = 40
  imageMargin : number = 2
  errorMessage:string = ''
 private _listFilter:string ='';
 get listFilter():string{
  return this._listFilter;
 }
 set listFilter(value:string){
  this._listFilter = value;
  console.log('In Setter:', value);
  this.filteredProducts = this.performFilter(value)
 }
  show:boolean = false
  toggleshow():void{
    this.show = !this.show
  }
  performFilter(filterBy:string):Iproduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct)=>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }
  filteredProducts:Iproduct[]=[];
  products:Iproduct[] = []

  constructor(private productservice: ProductserviceService) { }

  ngOnInit(): void {
  this.productservice.getProducts().subscribe({
    next: products =>{ 
      this.products = products,
      this.filteredProducts = this.products;
    },
    error: err=>this.errorMessage = err
  });
    
  }
  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message; 
  }

}
