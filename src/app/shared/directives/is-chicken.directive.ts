import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective implements OnInit{

  constructor(
    private templateRef: TemplateRef<any>, /*внутренее содержимое ng-template*/
    private viewContainer: ViewContainerRef /*ссылка на сам ng-template*/
  ) { }

  @Input()
  isChicken: string = '';

  ngOnInit(): void {
    if (this.isChicken.toLowerCase().includes('кур')){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    
  }

  // set isChicken(description: string){
  //   if (description.toLowerCase().includes('кур')){
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }
}
