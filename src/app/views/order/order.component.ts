import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public formValues = {
    productTitle : '',
    adress: '' ,
    phone: ''
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute, private productService: ProductService) { }



  ngOnInit(): void {
    // if (this.cartService.product){
    //   this.formValues.productTitle =  this.cartService.product;
    // }
   
    this.subscription =  this.activatedRoute.queryParams.subscribe((params)=>{
      if (params['product']){
        this.formValues.productTitle = params['product']
      }
    })

    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if(productParam){
    //   this.formValues.productTitle = productParam;
    // }
  }

  test(){
    this.subscription?.unsubscribe();
  }

  public createOrder(): void{
    
    if (!this.formValues.productTitle) {
        alert('Заполните пиццу');
        return;
    }
    if (!this.formValues.adress) {
        alert('Заполните адрес');
        return;
    }
    
    if (!this.formValues.phone) {
        alert('Заполните телефон');
        return;
    }

    //ajax
    this.subscriptionOrder =  this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.adress,
      phone: this.formValues.phone,
    })
    .subscribe(response=>{
      if(response.success && !response.message){
        alert('Спасибо за заказ');
    
        this.formValues = {
          productTitle : '',
          adress: '' ,
          phone: ''
        }
      } else {
        alert('Ошибка');
      }
    });


    
  }

  ngOnDestroy(): void {
    //отписка позволит избежать утечек памяти
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  

}
