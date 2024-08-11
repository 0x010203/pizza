import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { catchError, map, of, retry, tap } from 'rxjs';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductType[] = [];
  public loading: boolean = false;

  constructor(private productService: ProductService, private cartService: CartService,
    private router: Router, private http: HttpClient
  ) { }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    // this.http.get<ProductType[]>('http://testologia.ru/pizzas')
    // .subscribe((data)=>{
    //   this.products = data;
    // });
    //this.http.get<{data: ProductType[]}>('http://testologia1.ru/pizzas?extraField=1')
    this.loading = true;
    this.productService.getProducts()
    // .pipe(
    //   //tap для сторонних операций, не затрагиявая основной результат
    //   tap((result)=>{
    //     console.log(result);
    //   }),
    //   map((result)=> {return result.data}),
    //   // catchError(error=>{
    //   //   //можем либо выкинуть свою ошибку либо создать новый observable и продолжить его выполнение

    //   //   //генерация ошибки
    //   //   //throw new Error('omg');
    //   //   //сюда попадаем только если observable завершается с ошибкой
    //   //   //после этого подпадаем в subscribe в секцию error
        
    //   //   //делаем новый observable
    //   //   return of([]);
    //   // }),
    //   //можно указать сколько раз повторить в случае ошибки
    //   retry(3)
    // )
    .pipe(
      tap(()=>{
        this.loading = false;
      })
    )
    .subscribe(
      {
        next: (data)=>{
          //this.loading = false;
          this.products = data;
          console.log('next');
        },
        error: (error) =>{
          //this.loading = false;
          console.log(error);
          this.router.navigate(['/']);
          console.log('error');
        }
      }
      );
  }

  // public addToCart(/*product: ProductType*/ title:string) : void {
  //   //this.formValues.productTitle = title;
  //   //this.cartService.count ++;

  //   //logic
  //   this.cartService.product = title;
  //   //через сервис
  //   //this.router.navigate(['/order']); 
  //   //через параметры адресной строки
  //   //this.router.navigate(['/order', {product: title}]); 
  //   //через query-параметры адресной строки
  //   this.router.navigate(['/order'], {queryParams: {product: title}}); 
  // }

}
