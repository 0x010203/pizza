import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, Subscription, from, map } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';

//declare var bootstrap: any; //если подключаем без typing
//import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
 
  private subscription: Subscription | null = null;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  

  //private observable: Observable<string>;
  //private observable: Observable<number>;
  //private promise: Promise<string>;


  private subject: Subject<number>;

  //private modalService = inject(NgbModal);
	//closeResult = '';

  constructor( public cartService: CartService, private modalService: NgbModal){

    this.subject = new Subject<number>();
    let count: number = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    //просто завершается, подписчики больше ничего не узнают
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);
      


    //this.observable = from([1,2,3,4,5]);

//только создали, но не запустили функцию
    // this.observable =  new Observable((observer)=>{

    //   // setTimeout(()=>{
    //   //   observer.next('observer2000');
    //   // }, 2000);
    //   let count: number = 0;
    //   const interval = setInterval(()=>{
    //     observer.next(count++);
    //   }, 1000);
    //   //просто завершается, подписчики больше ничего не узнают
    //   const timeout1 = setTimeout(()=>{
    //      observer.complete();
    //   }, 4000);
    //   //завершается с ошибкой
    //   const timeout2 = setTimeout(()=>{
    //     //observer.next('observer3000');
    //     observer.error('text error (world)');
    //   }, 5000);

    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     },
    //   }

    // });

    // this.promise = new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve('Promise: hello');
    //   }, 2000);
    // });
  }

  ngOnInit(): void {

    console.log(environment.production);
    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show(); 

    

  //делаем подписку
  //если подписчиков нет, то функция не сработает

  // this.observable.subscribe((param: number)=>{
  //   console.log('subscriber 1: ', param);
  // });
  //для обработки ошибок передаем не функцию, а объект
  // this.subscription =  this.observable.subscribe({
  //   next: (param: number) => {
  //     console.log('subscriber 1: ', param);
  //   },
  //   error: (error: string) => {
  //     console.log('ERROR!!!' + error);
  //   },
  // });
  // this.subscription =  this.observable
  this.subscription =  this.subject
  // .pipe(
  //   map((number: number)=>{return number * 10})
  // )
  .subscribe({
    next: (param: number) => {
      console.log('subscriber 1: ', param);
    },
    error: (error: string) => {
      console.log('ERROR!!!' + error);
    },
  });


  // this.promise.then((param: string)=>{
  //   console.log('OnInit, Promise: ', param);
  // })

  }

  // public scrollTo(target: HTMLElement) : void {
  //   target.scrollIntoView({behavior: "smooth" });
  // }

  ngAfterViewInit(): void {
    //this.modalService.open(this.popup, {});

    //через недоделанный компонент
    // const modalRef = this.modalService.open(PopupComponent);
		// modalRef.componentInstance.data = 'Main component';

    //через компонент
    this.popupComponent.open();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  test(/*popup: TemplateRef<ElementRef>*/){
    //this.modalService.open(popup, {});
    //this.observable
    this.subject
    .pipe(
      //map((number: number)=>{return number * 10})
      map((number: number)=>{return 'Число: ' + number})
    )
    .subscribe((param: string)=>{
      console.log('subscriber 2: ', param);
    });
  }

}
