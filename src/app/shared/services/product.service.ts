import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductType } from '../../../types/product.type';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable(
  {
  providedIn: 'root'
}
)
export class ProductService { 

  constructor(private http: HttpClient) { }

  private products: ProductType[] =  [
    // {
    //   id: 1,
    //   image: 'pizza1.png',
    //   title: 'Мясная Делюкс',
    //   description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 2,
    //   image: '',
    //   title: 'Морская Премиум',
    //   description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    //   datetime: '2022-01-23 10:59:00'
    // },
    // {
    //   id: 3,
    //   image: 'pizza3.png',
    //   title: 'Бекон и Сосиски',
    //   description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    //   datetime: '2023-05-31 22:35:16'
    // },
    // {
    //   id: 4,
    //   image: 'pizza4.png',
    //   title: 'Куриная Делюкс',
    //   description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 5,
    //   image: 'pizza5.png',
    //   title: 'Барбекю Премиум',
    //   description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    //   datetime: '2022-12-31 18:38:00'
    // },
    // {
    //   id: 6,
    //   image: 'pizza6.png',
    //   title: 'Пепперони Дабл',
    //   description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    //   datetime: '2022-12-22 15:00:00'
    // },
    // {
    //   id: 7,
    //   image: 'pizza7.png',
    //   title: 'Куриное трио',
    //   description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    //   datetime: '2022-10-31 15:00:00'
    // },
    // {
    //   id: 8,
    //   image: 'pizza8.png',
    //   title: 'Сырная',
    //   description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    //   datetime: '2022-12-31 15:00:00'
    // },

  ]

  //getProducts(): ProductType[]{
  //   getProducts(): Observable<ProductType[]>{
  //   //ajax
  //   //return this.products;
  //   let params = new HttpParams();
  //   params = params.set('extraField','1');
  //   //return this.http.get<{data: ProductType[]}>('https://testologia.ru/pizzas?extraField=1', {
  //   return this.http.get<{data: ProductType[]}>('https://testologia.ru/pizzas', {
  //     //полнота ответа - весь запрос или только тело
  //     //observe: 'response'
  //     //по умлочанию ответ в json, можно указать тип текст
  //     //responseType: 'text'
  //     //заголовки запроса
  //     headers: new HttpHeaders({
  //      // Autorization: 'auth-token'
  //     }),
  //     params: params,
  //   })
  //   .pipe(
  //     tap((result)=>{
  //       console.log(result);
  //     }),
  //     //map((result)=> {return result.body? result.body.data : []}),
  //     map((result)=> {return result.data}),
  //     // catchError(error=>{
  //     //   //можем либо выкинуть свою ошибку либо создать новый observable и продолжить его выполнение

  //     //   //генерация ошибки
  //     //   //throw new Error('omg');
  //     //   //сюда попадаем только если observable завершается с ошибкой
  //     //   //после этого подпадаем в subscribe в секцию error
        
  //     //   //делаем новый observable
  //     //   return of([]);
  //     // }),
  //     //можно указать сколько раз повторить в случае ошибки
      
  //   )
    
  // }

  getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${environment.apiURL}pizzas`)
  }

  getProduct(id: number):  Observable<ProductType>{
    
    //return this.products.find(item=> (item.id === id));
    return this.http.get<ProductType>(`${environment.apiURL}pizzas?id=${id}`)
  }


  createOrder(data:{ product: string, address: string, phone: string}){
    return this.http.post<{success: boolean, message?: string}>(`${environment.apiURL}order-pizza`, data)
  }
}
