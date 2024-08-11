import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ProductType } from 'src/types/product.type';
import { CartProductService } from '../../services/cart-product.service';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  //encapsulation: ViewEncapsulation.None,
  providers: [CartProductService],
})
export class ProductCardComponent{
  //@Input() product!: ProductType;
  // @Input() product?: ProductType;
  //@Input() product: ProductType; // "strictPropertyInitialization": false,
//@Input() product: ProductType = {} as ProductType;

@Input() product: ProductType;
//геттеры и сеттеры
  // @Input() 
  // get product(): ProductType {return this._product};
  // set product(param: ProductType) {
  //   param.title =  param.title.toUpperCase();
  //   this._product = param;
  // }

  //private _product: ProductType;

  // @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef; 


  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0, 
      image: '',
      title: '',
      description: '',
      datetime: ''
    };
    // this._product = {
    //   image: '',
    //   title: '',
    //   description: '',
    // };

    // тут elem еще не доступен
  }

  
  // addProductToCart(/*title:string*/){
  //   // this.addToCartEvent.emit(this.product);
  //   // this.addToCartEvent.emit(title);
  //   //this.addToCartEvent.emit(this.titleComponent.toLower()  );
  //   this.addToCartEvent.emit(this.titleComponent.title );
  //   this.cartProductService.count ++;
  // }
}
