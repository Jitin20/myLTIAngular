
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Iproduct } from './products/productlist/iproduct';

@Injectable({
  providedIn: 'root' // Means that it is injected in root glpbally
})
export class ProductserviceService {
  private url = 'api/products.json';

 getProducts():Observable<Iproduct[]>{
  return this.http.get<Iproduct[]>(this.url).pipe(
    tap(data=>console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
  )
 }
 getProduct(id: number): Observable<Iproduct | undefined> {
  return this.getProducts()
    .pipe(
      map((products: Iproduct[]) => products.find(p => p.productId === id))
    );
}

 private handleError(err:HttpErrorResponse){
  let errorMessage =''
  if(err.error instanceof ErrorEvent){
    errorMessage=`An error occurred : ${err.error.message}`;
  }
  else{
    errorMessage = `Server returned code: $ {err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage)
  return throwError(()=>errorMessage)
 }
 

  constructor(private http: HttpClient) { }
}
